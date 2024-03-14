import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, Button, StyleSheet, ScrollView } from 'react-native'
import Facility from "../../model/Facility"
import { PhoenixAPI } from '../../network/PhoenixAPI'

const NotificationCreate = (facility: Facility) => {

  const [id, setId] = useState(facility.id);
  const [name, setTitle] = useState(facility.name)
  const [description, setDescription] = useState(facility?.description?.toString() ?? "")
  const [longitude, setLongitude] = useState(facility?.longitude?.toString() ?? "")
  const [latitude, setLatitude] = useState(facility?.latitude?.toString() ?? "")
  const [iconUrl, setIconString] = useState("")

  const validate = () => {
    return {
      name: validateTitle,
      description: validateDescription,
      longitude: validateLongitude,
      latitude: validateLatitude,
      iconUrl: validateIconUrl,
    }
  }

  const validateTitle = () => {
    return name && name.length > 0
  }

  const validateDescription = () => {
    return description && description.length > 0
  }

  const validateLongitude = () => {
    return longitude && longitude.length > 0
  }

  const validateLatitude = () => {
    return latitude && latitude.length > 0
  }

  const validateIconUrl = () => {
    return iconUrl && iconUrl.length > 0
  }

  const clickHandler = async () => {

    if (!validate) {
      return;
    }

    const response = await PhoenixAPI.getInstance().FacilityAPI.sendUpdateRequest({
      facilityId: id,
      name: name,
      description: description,
      type: "Deze waarde moet uit de api, toch?",
      longitude: longitude,
      latitude: latitude,
      iconUrl: iconUrl
    })
      .then(function(response) {
        console.log("response:")
        console.log(response)
      }).catch(function(error) {
        console.log("error:")
        console.log(error)
      })
  }

  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.inputContainer}>
          <Text>ID of facility</Text>
          <TextInput
            inputMode='numeric'
            style={styles.input}
            onChangeText={(value) => setId(+value)} />
        </View>

        <View style={styles.inputContainer}>
          <Text>New title</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setTitle(value)} />
        </View>


        <View style={styles.inputContainer}>
          <Text>New description</Text>
          <TextInput
            multiline={true}
            numberOfLines={3}
            style={styles.input}
            onChangeText={(value) => setDescription(value)} />
        </View>

        <View style={styles.inputContainer}>
          <Text>New longitude</Text>
          <TextInput
            inputMode='decimal'
            style={styles.input}
            onChangeText={(value) => setLongitude(value)} />
        </View>

        <View style={styles.inputContainer}>
          <Text>New latitude</Text>
          <TextInput
            inputMode='decimal'
            style={styles.input}
            onChangeText={(value) => setLatitude(value)} />
        </View>

        <View style={styles.inputContainer}>
          <Text>New icon name</Text>
          <TextInput
            inputMode='url'
            style={styles.input}
            onChangeText={(value) => setIconString(value)} />
        </View>

        <View style={styles.inputContainer}>
          <Button title='Send change request' onPress={clickHandler} />
        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  inputContainer: {
    marginTop: 3
  },
  input: {
    borderWidth: 1,
    padding: 3,
  },
  validationError: {
    color: '#F00'

  }
})

export default NotificationCreate
