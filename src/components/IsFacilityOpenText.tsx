import React from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'
import { Colors } from '../configuration/styles/Colors'
import OpeningHoursManager from '../managers/OpeningHoursManager'
import { Facility } from '../model/Facility'

interface IsFacilityOpenTextProps {
    facility: Facility
    style?: TextProps['style']
}

const IsFacilityOpenText = ({ facility, style }: IsFacilityOpenTextProps) => {
    const openingHours = OpeningHoursManager.mergeDefaultAndSpecialOpeningHours(
        facility.defaultOpeningHours,
        facility.specialOpeningHours
    )
    const todaysOpeningHours =
        OpeningHoursManager.getTodaysOpeningHours(openingHours)

    if (!todaysOpeningHours) {
        return null
    }
    const isOpen = OpeningHoursManager.isOpenNow(todaysOpeningHours)
    const textStyle = isOpen ? styles.open : styles.closed
    return (
        <Text style={[textStyle, styles.text, style]}>
            {isOpen ? 'Open' : 'Gesloten'}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: '400'
    },
    open: {
        color: Colors.success
    },
    closed: {
        color: Colors.error
    }
})

export default IsFacilityOpenText

