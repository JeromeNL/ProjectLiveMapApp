import { DefaultOpeningHour, SpecialOpeningHour } from '../model/OpeningHours'

const OpeningHoursManager = {
    mergeDefaultAndSpecialOpeningHours: (
        defaultOpeningHours: DefaultOpeningHour[],
        specialOpeningHours: SpecialOpeningHour[]
    ) => {
        let openingHours: DefaultOpeningHour[] = Object.assign(
            {},
            defaultOpeningHours
        )
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
        const now = new Date()
        const currentDay = now.getDay()
        const currentHour = now.getHours()
        const currentMinute = now.getMinutes()
        const openTime = new Date(openingHours.openTime)
        const closeTime = new Date(openingHours.closeTime)
        return (
            currentDay === openingHours.weekDay &&
            currentHour >= openTime.getHours() &&
            currentMinute >= openTime.getMinutes() &&
            currentHour <= closeTime.getHours() &&
            currentMinute <= closeTime.getMinutes()
        )
    }
}

export default OpeningHoursManager

