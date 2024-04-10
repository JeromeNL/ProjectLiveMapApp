import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import FormFieldInput from '../../../components/form/FormFieldInput'
import ProposedFacility, {
    facilitySchema
} from '../../../model/ProposedFacility'
import { PhoenixAPI } from '../../../network/PhoenixAPI'



const ReportFaultScreen = ({ route, navigation }: any) => {
    let facilityParam: Partial<ProposedFacility> | undefined =
        route.params?.facility
    const isCreating = facilityParam?.facilityId === undefined

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<ProposedFacility>({
        defaultValues: facilityParam,
        resolver: yupResolver(facilitySchema)
    })

    const updateIconProperty = (value: string) => {
        const propertyName: keyof ProposedFacility = 'iconName'
        setValue(propertyName, value)
    }

    const clickHandler = async (data: ProposedFacility) => {
        await PhoenixAPI.getInstance().FacilityAPI.upsertFacility(data)

        Alert.alert('Verstuurd!', 'Bedankt voor de melding', [
            { text: 'OK', onPress: () => navigation.goBack() }
        ])
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {!isCreating && (
                    <View style={styles.inputContainer}>
                        <Text>Mijn mooie ID: {facilityParam?.facilityId?.toString()}</Text>
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
    }
})

export default ReportFaultScreen

