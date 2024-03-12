import React, { useState, useEffect } from "react"
import { Text, TextInput, View, Button, StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import axios from "axios"
import Facility from "../../model/Facility"

const notificationTypes = [
  { label: 'Trash', value: 'Trash' },
  { label: 'Broken', value: 'Broken' },
  { label: 'Closed', value: 'Closed' },
]

const NotificationCreate = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')

  const clickHandler = () => {
    console.log(title)
    console.log(description)
    console.log(type)

    const axiosClient = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com'
    })

    axiosClient.post('/posts', {
      title: title,
      description: description,
      type: type
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
        <Text>Type of problem</Text>
        <Dropdown style={styles.input}
          data={notificationTypes} labelField={"label"} valueField={"value"} onChange={item => setTitle(item.value)} />
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
