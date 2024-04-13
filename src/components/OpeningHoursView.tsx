import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OpeningHoursManager from '../managers/OpeningHoursManager'
import { DefaultOpeningHour, SpecialOpeningHour } from '../model/OpeningHours'

const OpeningHoursView = (
    defaultOpeningHour: DefaultOpeningHour[],
    specialOpeningHour: SpecialOpeningHour[]
) => {
    const openingHours = OpeningHoursManager.mergeDefaultAndSpecialOpeningHours(
        defaultOpeningHour,
        specialOpeningHour
    )

    const weekDays = [
        'Maandag',
        'Dinsdag',
        'Woensdag',
        'Donderdag',
        'Vrijdag',
        'Zaterdag',
        'Zondag'
    ]

    return (
        <View>
            {openingHours.map((openingHour, index) => {
                return (
                    <View key={index} style={styles.container}>
                        <Text>{weekDays[openingHour.weekDay]}</Text>
                        <Text>{openingHour.openTime}</Text>
                        <Text>{openingHour.closeTime}</Text>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})

export default OpeningHoursView

