import React, { ReactNode } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../../configuration/styles/Colors'

interface FloatingMapActionProps {
    onPress?: () => void
    icon: ReactNode
}

const FloatingMapAction = (props: FloatingMapActionProps) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>{props.icon}</View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        width: 50,
        height: 50,
        backgroundColor: Colors.primary,
        padding: 5,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.15,
    }
})

export default FloatingMapAction
