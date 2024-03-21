import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import FormFieldInput from '../../../components/form/FormFieldInput'
import Facility, { facilitySchema } from '../../../model/Facility'
import { PhoenixAPI } from '../../../network/PhoenixAPI'
import { IconPicker } from './components/IconPicker'

const UpsertFacilityScreen = ({ route }: any) => {
    const facilityParam: Partial<Facility> | undefined = route.params?.facility
    const isCreating = facilityParam?.facilityId === undefined

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<Facility>({
        defaultValues: facilityParam,
        resolver: yupResolver(facilitySchema)
    })

    const updateIconProperty = (value: string) => {
        const propertyName: keyof Facility = 'iconUrl'
        setValue(propertyName, value)
    }

    const clickHandler = async (data: Facility) => {
        if (isCreating) {
            await PhoenixAPI.getInstance().FacilityAPI.createFacility(data)
        } else {
            await PhoenixAPI.getInstance().FacilityAPI.updateFacility(data)
        }

        Alert.alert('Message sent!', 'Thank you for reporting this change')
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {!isCreating && (
                    <View style={styles.inputContainer}>
                        <Text>
                            ID of facility:{' '}
                            {facilityParam?.facilityId?.toString()}
                        </Text>
                    </View>
                )}
                <IconPicker onSelect={(item) => updateIconProperty(item)} />

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
                <FormFieldInput
                    label="Type"
                    property="type"
                    control={control}
                    errors={errors}
                />
                {!facilityParam?.longitude && (
                    <FormFieldInput
                        label="Longtitude"
                        property="longitude"
                        control={control}
                        errors={errors}
                    />
                )}
                {!facilityParam?.latitude && (
                    <FormFieldInput
                        label="Latitude"
                        property="latitude"
                        control={control}
                        errors={errors}
                    />
                )}

                <View style={styles.inputContainer}>
                    <Button
                        title="Send change request"
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
    }
})

export default UpsertFacilityScreen

