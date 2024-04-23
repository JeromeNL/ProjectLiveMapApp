import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ServiceReport, serviceReportSchema } from '../../../model/ServiceReport'
import FormFieldInput from '../../../components/form/FormFieldInput'
import ProposedFacility from '../../../model/ProposedFacility'
import { Text,  View, StyleSheet, Button, Alert } from 'react-native'
import { PhoenixAPI } from '../../../network/PhoenixAPI'
import { ToastManager } from '../../../managers/ToastManager'
import { ServiceCategory } from '../../../model/ServiceCategory'
import { Dropdown } from 'react-native-element-dropdown'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

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

    const [categories, setCategories] = useState<ServiceCategory[]>([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await PhoenixAPI.getInstance().ServiceReportAPI.getServiceCategories()
                const responseCategory = response.data

                setCategories(responseCategory)

                setValue('serviceReportCategory', responseCategory[0])
                setValue('serviceReportCategoryId', responseCategory[0].id)
            } catch (e) {
                ToastManager.showError('Netwerkfout', 'Netwerk fout! Kan geen storing melding aanmaken.')
            }
        }

        fetchCategories()


    }, [])

    const clickHandler = async (data: ServiceReport) => {

        try {
            await PhoenixAPI.getInstance().ServiceReportAPI.postServiceReport(data)

            ToastManager.showSuccess('Verstuurd!', 'Bedankt voor de melding')
            navigation.goBack()
        } catch (e) {
            ToastManager.showError('Netwerkfout', 'Melding is niet verstuurd. Probeer het later nog eens.')
            console.error(e)
        }
    }

    if (facilityParam?.facilityId) {
        setValue('facilityId', facilityParam.facilityId, {
            shouldValidate: false
        })
    }

    const userId = useSelector((state: RootState) => state.auth.id)

    if (userId) {
        setValue('userId', userId)
    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>
                Faciliteit: {facilityParam?.name}
            </Text>

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

            
            <View style={styles.dropdownInput}>
                <Text>
                    Onder welke categorie valt het probleem?
                </Text>

                <Dropdown
                    style={styles.dropdownStyle}
                    data={categories}
                    labelField="name"
                    valueField="id"
                    value={categories[0]}
                    onChange={(item) => {
                        setValue('serviceReportCategory', item)
                        setValue('serviceReportCategoryId', item.id)
                    }}
                />
            </View>

            <Button
                title="Verstuur"
                onPress={handleSubmit(clickHandler)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 5  
    },
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
    dropdownInput: {
        marginBottom: 5,
        padding: 1
    },
    dropdownStyle: {
        borderWidth: 1,
    }
})

export default ServiceReportScreen

