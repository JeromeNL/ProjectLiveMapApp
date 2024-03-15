import React, { useState } from 'react'
import {
    Alert,
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'
import Facility from '../../model/Facility'
import { PhoenixAPI } from '../../network/PhoenixAPI'

const UpsertFacilityScreen = ({ route }: any) => {
    const facility: Facility = route.params.facility
    console.log(facility)

    const [id, setId] = useState(facility.facilityId)
    const [name, setTitle] = useState(facility.name)
    const [type, setType] = useState(facility.type)
    const [description, setDescription] = useState(
        facility?.description?.toString() ?? ''
    )
    const [longitude, setLongitude] = useState(
        facility?.longitude?.toString() ?? ''
    )
    const [latitude, setLatitude] = useState(
        facility?.latitude?.toString() ?? ''
    )
    const [iconUrl, setIconString] = useState('')

    const clickHandler = async () => {
        const response = await PhoenixAPI.getInstance()
            .FacilityAPI.sendUpdateRequest({
                facilityId: id,
                name: name,
                description: description,
                type: type,
                longitude: +longitude,
                latitude: +latitude,
                iconUrl: iconUrl
            })
            .then(function () {
                Alert.alert(
                    'Message send!',
                    'Thank you for reporting this change'
                )
            })
            .catch(function () {
                Alert.alert(
                    'An error occured',
                    'Please check your input and the network connection'
                )
            })
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.inputContainer}>
                    <Text>ID of facility</Text>
                    <TextInput
                        inputMode="numeric"
                        style={styles.input}
                        onChangeText={(value) => setId(+value)}
                        value={id.toString()}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text>New title</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => setTitle(value)}
                        value={name}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text>Type</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => setType(value)}
                        value={type}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text>New description</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={3}
                        style={styles.input}
                        onChangeText={(value) => setDescription(value)}
                        value={description}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text>New longitude</Text>
                    <TextInput
                        inputMode="decimal"
                        style={styles.input}
                        onChangeText={(value) => setLongitude(value)}
                        value={longitude}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text>New latitude</Text>
                    <TextInput
                        inputMode="decimal"
                        style={styles.input}
                        onChangeText={(value) => setLatitude(value)}
                        value={latitude}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text>New icon name</Text>
                    <TextInput
                        inputMode="url"
                        style={styles.input}
                        onChangeText={(value) => setIconString(value)}
                        value={iconUrl}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Button
                        title="Send change request"
                        onPress={clickHandler}
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
        marginTop: 3
    },
    input: {
        borderWidth: 1,
        padding: 3
    },
    validationError: {
        color: '#F00'
    }
})

export default UpsertFacilityScreen

