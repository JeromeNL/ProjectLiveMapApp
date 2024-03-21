import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import FormFieldInput from '../../components/form/FormFieldInput'
import Facility, { facilitySchema } from '../../model/Facility'
import { PhoenixAPI } from '../../network/PhoenixAPI'

const UpsertFacilityScreen = ({ route }: any) => {
    const facilityParam: Facility | undefined = route.params?.facility
    const isCreating = facilityParam === undefined

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<Facility>({
        defaultValues: facilityParam,
        resolver: yupResolver(facilitySchema)
    })

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
                <FormFieldInput
                    label="Longtitude"
                    property="longitude"
                    control={control}
                    errors={errors}
                />
                <FormFieldInput
                    label="Latitude"
                    property="latitude"
                    control={control}
                    errors={errors}
                />
                <FormFieldInput
                    label="Icon URL"
                    property="iconUrl"
                    control={control}
                    errors={errors}
                />

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

