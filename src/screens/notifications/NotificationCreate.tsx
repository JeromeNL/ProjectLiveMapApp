import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, Button, StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import axios from "axios"
import Facility from "../../model/Facility"


const NotificationCreate = () => {

  const [id, setId] = useState();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [longitude, setLongitude] = useState('')
  const [latitude, setLatitude] = useState('')
  const [iconUrl, setIconString] = useState('')

  const clickHandler = () => {

    const axiosClient = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com'
    })

    axiosClient.post('/posts', {
      facilityId: id,
      name: title,
      description: description,
      type: type,
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
