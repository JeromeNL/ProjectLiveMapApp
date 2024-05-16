import { IconChevronRight } from '@tabler/icons-react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../../../configuration/styles/Colors'

interface MenuButtonProps {
    title: string
    onPress: () => void
}

const MenuButton = ({ title, onPress }: MenuButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text>{title}</Text>
                <IconChevronRight
                    color={Colors.gray}
                    size={20}
                    style={styles.chevron}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        paddingVertical: 11,
        paddingHorizontal: 5,
        width: '100%',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: Colors.darkGray,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    chevron: {
        position: 'absolute',
        right: 10
    }
})

export default MenuButton

