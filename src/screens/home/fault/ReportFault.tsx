import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FacilityFault, facilityFaultSchema } from '../../../model/FacilityFault'
import FormFieldInput from '../../../components/form/FormFieldInput'
import ProposedFacility from '../../../model/ProposedFacility'
import { Text, View, StyleSheet, Button, Alert } from 'react-native'


const ReportFaultScreen = ({ route, navigation }: any) => {
    let facilityParam: Partial<ProposedFacility> | undefined =
        route.params?.facility
    
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<FacilityFault>({
        resolver: yupResolver(facilityFaultSchema)
    })


    const clickHandler = async (data: FacilityFault) => {
        // await PhoenixAPI.getInstance().FacilityAPI.upsertFacility(data)

        Alert.alert('Verstuurd!', 'Bedankt voor de melding', [
            { text: 'OK', onPress: () => navigation.goBack() }
        ])
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

export default ReportFaultScreen

