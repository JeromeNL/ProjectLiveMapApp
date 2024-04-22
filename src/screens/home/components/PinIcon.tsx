import { Icon } from '@tabler/icons-react-native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import { Colors } from '../../../configuration/styles/Colors'
import IconManager from '../../../managers/IconManager'

interface PinIconProps {
    hex: string
    Icon: Icon
    showExclamationMark: boolean
}

export const PinIcon = ({ hex, Icon, showExclamationMark }: PinIconProps) => {
    const darkenedColor = darkenColor(hex, -0.1)
    const ServiceReportIcon = IconManager.getIcon('exclamation-mark')

    return (

        <View style={styles.container}>
            <View>
                <Svg width="27" height="35" viewBox="0 0 27 35" fill="none">
                    <Path
                        d="M13.0508 34.9999C12.7179 35.0024 12.3924 34.9002 12.1199 34.7074C11.8473 34.5146 11.6411 34.2409 11.5301 33.9243C9.82786 29.1929 3.47834 22.1101 3.41025 22.0357L3.37053 21.9842C1.67679 20.0955 0.562895 17.752 0.163914 15.2377C-0.235066 12.7234 0.0980071 10.1464 1.12275 7.81923C2.14749 5.49202 3.81988 3.51457 5.93711 2.12666C8.05434 0.738746 10.5255 0 13.0508 0C15.5762 0 18.0474 0.738746 20.1646 2.12666C22.2818 3.51457 23.9542 5.49202 24.9789 7.81923C26.0037 10.1464 26.3368 12.7234 25.9378 15.2377C25.5388 17.752 24.4249 20.0955 22.7312 21.9842L22.6914 22.0357C22.6234 22.1101 16.2738 29.1929 14.5716 33.9243C14.4613 34.2413 14.2553 34.5155 13.9826 34.7085C13.7098 34.9014 13.384 35.0033 13.0508 34.9999Z"
                        fill={darkenedColor}
                    />
                    <Path
                        d="M24.9153 13.1757C24.9153 9.99593 23.6653 6.94643 21.4403 4.69801C19.2153 2.44959 16.1976 1.18645 13.0509 1.18645C9.90429 1.18645 6.88653 2.44959 4.66153 4.69801C2.43652 6.94643 1.18652 9.99593 1.18652 13.1757C1.18662 16.1657 2.29758 19.0467 4.29951 21.2484C4.29951 21.2484 10.8136 28.4933 12.6102 33.4889C12.6422 33.5836 12.7027 33.6658 12.7833 33.724C12.8638 33.7823 12.9604 33.8136 13.0594 33.8136C13.1584 33.8136 13.255 33.7823 13.3355 33.724C13.4161 33.6658 13.4766 33.5836 13.5086 33.4889C15.3052 28.4933 21.8136 21.2484 21.8136 21.2484C23.8119 19.0453 24.9189 16.1643 24.9153 13.1757Z"
                        fill={hex}
                    />
                </Svg>
            </View>
            <View
                style={{
                    position: 'absolute',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Icon
                    color={Colors.white}
                    width={15}
                    style={{ marginTop: 1 }}
                />

                {showExclamationMark && (
                    <ServiceReportIcon
                        color={Colors.error}
                        width={30}
                        height={30}
                        style={(styles.exclamationMark)}
                    />
                )}
            </View>
        </View>
    )
}

function darkenColor(hex: string, lum: number) {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '')
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }
    lum = lum || 0
    // convert to decimal and change luminosity
    let rgb = '#'
    let c
    let i
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substring(i * 2, i * 2 + 2), 16)
        c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16)
        rgb += ('00' + c).substring(c.length)
    }
    return rgb
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    iconContainer: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    exclamationMark: {
        position: 'relative',
        top: -18, left: 10,
        transform: [{ rotate: '7deg' }]
    }
})

