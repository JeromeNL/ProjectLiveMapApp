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
        return openingHours
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
    }
}

export default OpeningHoursManager

