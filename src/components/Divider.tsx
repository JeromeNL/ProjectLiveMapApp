import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Colors } from '../configuration/styles/Colors'

interface DividerProps {
    width?: number
    orientation?: 'horizontal' | 'vertical'
    color?: string
    dividerStyle?: any
}

const Divider = ({
    width = 1,
    orientation = 'horizontal',
    color = Colors.gray,
    dividerStyle
}: DividerProps) => {
    const windowWidth = Dimensions.get('window').width * 0.7
    const dividerStyles = [
        { width: orientation === 'horizontal' ? windowWidth : width },
        { height: orientation === 'vertical' ? '100%' : width },
        { backgroundColor: color },
        dividerStyle
    ]

    return <View style={[styles.divider, dividerStyles]} />
}

const styles = StyleSheet.create({
    divider: {
        marginVertical: 24
    }
})

export default Divider

