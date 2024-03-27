import {
    IconChefHat,
    IconSandbox,
    IconSmoking,
    IconTrash,
    IconX
} from '@tabler/icons-react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import { FlatGrid } from 'react-native-super-grid'
import { Colors } from '../../../../configuration/styles/Colors'
import IconManager from '../../../../managers/IconManager'

interface IconPickerProps {
    onSelect: (key: string) => void
    defaultValue?: string
}

export const IconPicker: React.FC<IconPickerProps> = ({
    onSelect,
    defaultValue
}: IconPickerProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const availableIcons = useMemo(
        () => [IconTrash, IconChefHat, IconSandbox, IconSmoking],
        []
    )
    const [selectedIcon, setSelectedIcon] = useState(
        defaultValue ?? IconManager.iconToKebabCase(availableIcons[0])
    )
    const SelectedIconComponent = selectedIcon
        ? IconManager.getIcon(selectedIcon)
        : null

    useEffect(() => {
        if (selectedIcon === null) {
            return
        }
        onSelect(selectedIcon)
    }, [selectedIcon])

    return (
        <View>
            <TouchableOpacity
                onPress={() => setIsVisible(true)}
                style={styles.button}
            >
                {SelectedIconComponent && (
                    <SelectedIconComponent color={Colors.black} />
                )}
            </TouchableOpacity>

            <Modal
                isVisible={isVisible}
                animationIn={'slideInUp'}
                animationOut={'slideOutDown'}
                backdropOpacity={0.2}
                onBackdropPress={() => setIsVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setIsVisible(false)}
                        >
                            <IconX color={Colors.gray} />
                        </TouchableOpacity>
                        <FlatGrid
                            itemDimension={50}
                            maxItemsPerRow={3}
                            data={availableIcons}
                            spacing={10}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        const key =
                                            IconManager.iconToKebabCase(item)
                                        if (key === null) {
                                            return
                                        }
                                        setSelectedIcon(key)
                                        setIsVisible(false)
                                    }}
                                    style={styles.gridItem}
                                >
                                    {React.createElement(item, {
                                        color: Colors.black
                                    })}
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: Colors.lightGray,
        alignItems: 'center',
        borderRadius: 5,
        borderColor: Colors.gray,
        borderWidth: 1
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.15
    },
    modalContent: {
        width: '90%',
        backgroundColor: Colors.white,
        padding: 20,
        borderRadius: 4
    },
    gridItem: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        backgroundColor: Colors.lightGray,
        borderRadius: 5
    },
    closeButton: {
        position: 'absolute',
        top: 5,
        right: 5
    }
})

