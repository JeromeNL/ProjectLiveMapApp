import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../configuration/styles/Colors'
import OpeningHoursManager from '../managers/OpeningHoursManager'
import { DefaultOpeningHour, SpecialOpeningHour } from '../model/OpeningHours'

interface OpeningHoursViewProps {
    defaultOpeningHour: DefaultOpeningHour[]
    specialOpeningHour: SpecialOpeningHour[]
}

const OpeningHoursView = ({
    defaultOpeningHour,
    specialOpeningHour
}: OpeningHoursViewProps) => {
    const openingHours = OpeningHoursManager.mergeDefaultAndSpecialOpeningHours(
        defaultOpeningHour,
        specialOpeningHour
    )

    const weekDays = [
        'Zondag',
        'Maandag',
        'Dinsdag',
        'Woensdag',
        'Donderdag',
        'Vrijdag',
        'Zaterdag'
    ]

    return (
        <View>
            {openingHours.map((openingHour, index) => {
                const isToday = new Date().getDay() === openingHour.weekDay
                const textStyle = isToday
                    ? styles.todayText
                    : styles.notTodayText
                return (
                    <View key={index} style={styles.container}>
                        <Text style={textStyle}>
                            {weekDays[openingHour.weekDay]}
                        </Text>
                        <View style={styles.timeContainer}>
                            {openingHour.openTime === 'Gesloten' ? (
                                <Text style={textStyle}>Gesloten</Text>
                            ) : (
                                <>
                                    <Text style={textStyle}>
                                        {openingHour.openTime}
                                    </Text>
                                    <Text style={textStyle}> - </Text>
                                    <Text style={textStyle}>
                                        {openingHour.closeTime}
                                    </Text>
                                </>
                            )}
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timeContainer: {
        flexDirection: 'row'
    },
    todayText: {
        fontWeight: 'bold'
    },
    notTodayText: {
        color: Colors.darkGray
    }
})

export default OpeningHoursView
