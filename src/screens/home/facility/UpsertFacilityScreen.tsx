import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { useSelector } from 'react-redux'
import FormFieldInput from '../../../components/form/FormFieldInput'
import { ToastManager } from '../../../managers/ToastManager'
import { Facility } from '../../../model/Facility'
import { FacilityCategory } from '../../../model/FacilityCategory'
import ProposedFacility, {
    facilitySchema
} from '../../../model/ProposedFacility'
import { PhoenixAPI } from '../../../network/PhoenixAPI'
import { RootState } from '../../../redux/store'

const UpsertFacilityScreen = ({ route, navigation }: any) => {
    const facility: Facility | undefined = route.params?.facility as Facility
    facility.specialOpeningHours = []
    facility.defaultOpeningHours = []
    let facilityParam = facility as Partial<ProposedFacility>
    const isCreating = facilityParam?.facilityId === undefined

    const userId = useSelector((state: RootState) => state.auth.id)
    // @ts-ignore
    facility.userId = userId
    facilityParam.facilityId = facility.id

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<ProposedFacility>({
        defaultValues: facilityParam,
        resolver: yupResolver(facilitySchema)
    })

    const [categories, setCategories] = useState<FacilityCategory[]>([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response =
                    await PhoenixAPI.getInstance().FacilityAPI.getCategories()
                const responseCategory = response.data

                setCategories(responseCategory)

                if (facilityParam?.categoryId) {
                } else {
                    setValue('categoryId', responseCategory[0].id)
                    setValue('category', responseCategory[0])
                }
            } catch (e) {
                ToastManager.showError(
                    'Netwerkfout',
                    'Netwerk fout! Kan geen storing melding aanmaken.'
                )
            }
        }

        fetchCategories()
    }, [])

    const clickHandler = async (data: ProposedFacility) => {
        await PhoenixAPI.getInstance().FacilityAPI.upsertFacility(data)

        ToastManager.showSuccess('Verstuurd!', 'Bedankt voor de melding')
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {!isCreating && (
                    <View style={styles.inputContainer}>
                        <Text>ID: {facilityParam?.facilityId?.toString()}</Text>
                    </View>
                )}
                <View style={styles.dropdownInput}>
                    <Text>Categorie</Text>

                    <Dropdown
                        style={styles.dropdownStyle}
                        data={categories}
                        labelField="name"
                        valueField="id"
                        value={categories[0]}
                        onChange={(item) => {
                            setValue('categoryId', item.id)
                        }}
                    />
                </View>

                <FormFieldInput
                    label="Naam"
                    property="name"
                    control={control}
                    errors={errors}
                />

                <FormFieldInput
                    label="Beschrijving"
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
            </ScrollView>
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
    },
    dropdownInput: {
        marginBottom: 5,
        padding: 1
    },
    dropdownStyle: {
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default UpsertFacilityScreen

