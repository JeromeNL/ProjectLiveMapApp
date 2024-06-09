import moment from 'moment'
import { DefaultOpeningHour, SpecialOpeningHour } from '../model/OpeningHours'

const OpeningHoursManager = {
    mergeDefaultAndSpecialOpeningHours: (
        defaultOpeningHours: DefaultOpeningHour[],
        specialOpeningHours: SpecialOpeningHour[]
    ) => {
        let openingHours: DefaultOpeningHour[] = [...defaultOpeningHours]
        for (const openingHour of defaultOpeningHours) {
            for (const specialHour of specialOpeningHours) {
                if (openingHour.weekDay === specialHour.weekDay) {
                    openingHours[openingHour.weekDay] = specialHour
                }
            }
        }
        return openingHours.map((hour) => {
            if (hour.openTime === '00:00' && hour.closeTime === '00:00') {
                return {
                    ...hour,
                    openTime: 'Gesloten',
                    closeTime: 'Gesloten'
                }
            }
            return hour
        })
    },

    isOpenNow(openingHours: DefaultOpeningHour) {
        const now = moment()

        const openingTime = moment(openingHours.openTime, 'HH:mm')
        const closingTime = moment(openingHours.closeTime, 'HH:mm')

        return now.isBetween(openingTime, closingTime)
    },

    getTodaysOpeningHours(openingHours: DefaultOpeningHour[]) {
        const now = new Date()
        const currentDay = now.getDay()
        return openingHours.find(
            (openingHour) => openingHour.weekDay === currentDay
        )
    },

    isAlwaysOpen(openingHours: DefaultOpeningHour[]) {
        return openingHours.every((openingHour) => {
            return (
                openingHour.openTime === '00:00' &&
                openingHour.closeTime === '23:59'
            )
        })
    }
}

export default OpeningHoursManager
