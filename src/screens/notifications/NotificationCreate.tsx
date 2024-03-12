import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, Button, StyleSheet } from 'react-native'
import axios from "axios"
import Facility from "../../model/Facility"



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

  const clickHandler = () => {

    if (!validate) {
      return;
    }

    const axiosClient = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com'
    })

    axiosClient.post('/posts', {
      facilityId: id,
      name: name,
      description: description,
      longitude: longitude,
      latitude: latitude,
      iconUrl: iconUrl
    }).then(function(response) {
      console.log(response)
    }).catch(function(error) {
      console.log(error)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setTitle(value)} />
      </View>

      <View style={styles.inputContainer}>
        <Text>Description</Text>
        <TextInput
          multiline={true}
          numberOfLines={3}
          style={styles.input}
          onChangeText={(value) => setDescription(value)} />
      </View>

      <View style={styles.inputContainer}>
        <Text>Longitude</Text>
        <TextInput
          inputMode='decimal'
          style={styles.input}
          onChangeText={(value) => setLongitude(value)} />
      </View>

      <View style={styles.inputContainer}>
        <Text>Latitude</Text>
        <TextInput
          inputMode='decimal'
          style={styles.input}
          onChangeText={(value) => setLatitude(value)} />
      </View>

      <View style={styles.inputContainer}>
        <Text>Icon name</Text>
        <TextInput
          inputMode='url'
          style={styles.input}
          onChangeText={(value) => setIconString(value)} />
      </View>

      <View style={styles.inputContainer}>
        <Button title='Send change request' onPress={clickHandler} />
      </View>
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
  }
})

export default NotificationCreate
