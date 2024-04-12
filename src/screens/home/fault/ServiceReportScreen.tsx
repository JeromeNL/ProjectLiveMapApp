import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ServiceReport, serviceReportSchema } from '../../../model/ServiceReport'
import FormFieldInput from '../../../components/form/FormFieldInput'
import ProposedFacility from '../../../model/ProposedFacility'
import { Text, View, StyleSheet, Button, Alert } from 'react-native'
import { PhoenixAPI } from '../../../network/PhoenixAPI'
import { ToastManager } from '../../../managers/ToastManager'


const ServiceReportScreen = ({ route, navigation }: any) => {
    let facilityParam: Partial<ProposedFacility> | undefined =
        route.params?.facility
    
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<ServiceReport>({
        resolver: yupResolver(serviceReportSchema)
    })


    const clickHandler = async (data: ServiceReport) => {
        try {
            await PhoenixAPI.getInstance().FacilityAPI.postServiceReport(data)
            ToastManager.showInfo('Verstuurd!', 'Bedankt voor de melding')
            navigation.goBack()
        } catch (e) {
            ToastManager.showError('Netwerkfout', 'Melding is niet verstuurd. Probeer het later nog eens.')
            console.error(e)
        }
    }
    
    if (facilityParam?.facilityId) {
        setValue("facilityId", facilityParam.facilityId, {
            shouldValidate: false
        })
    }

    return (
        <View style={styles.container}>

            <FormFieldInput
                label="Titel"
                property="title"
                control={control}
                errors={errors}
            />
            
            <FormFieldInput
                label="Beschrijf wat er fout is"
                property="description"
                control={control}
                errors={errors}
            />
            
            <FormFieldInput
                label="Wat voor type melding is het?"
                property="category"
                control={control}
                errors={errors}
            />

            <View style={styles.inputContainer}>
                <Button
                    title="Verstuur"
                    onPress={handleSubmit(clickHandler)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    inputContainer: {
        marginTop: 10
    },
    input: {
        borderWidth: 1,
        padding: 5
    },
    validationError: {
        color: '#F00'
    }
})

export default ServiceReportScreen

