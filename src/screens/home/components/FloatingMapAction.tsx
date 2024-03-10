import React, { ReactNode } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface FloatingMapActionProps {
    onPress?: () => void
    icon: ReactNode
}

const FloatingMapAction = (props: FloatingMapActionProps) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
                <Text>+</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        width: 50,
        height: 50,
        backgroundColor: 'red',
        padding: 5,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FloatingMapAction
