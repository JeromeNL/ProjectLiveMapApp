import React, { useMemo, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import { FlatGrid } from 'react-native-super-grid'
import { Colors } from '../../../../configuration/styles/Colors'
import IconManager from '../../../../managers/IconManager'

interface IconPickerProps {
    onSelect: (key: string) => void
}

export const IconPicker: React.FC<IconPickerProps> = ({
    onSelect
}: IconPickerProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const availableIcons = useMemo(() => IconManager.getAvailableIcons(), [])
    const [selectedIcon, setSelectedIcon] = useState(availableIcons[0].key)
    const selectedIconComponent = IconManager.getIcon(selectedIcon)

    return (
        <View>
            <TouchableOpacity
                onPress={() => setIsVisible(true)}
                style={styles.button}
            >
                {React.createElement(selectedIconComponent)}
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
                        <FlatGrid
                            itemDimension={50}
                            maxItemsPerRow={3}
                            data={availableIcons}
                            spacing={10}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelectedIcon(item.key)
                                        onSelect(item.key)
                                        setIsVisible(false)
                                    }}
                                    style={styles.gridItem}
                                >
                                    {<item.component />}
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
        backgroundColor: '#ddd',
        alignItems: 'center'
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
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 4
    },
    gridItem: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        backgroundColor: '#ececec',
        borderRadius: 5
    }
})
