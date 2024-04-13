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
        const now = new Date()
        const currentDay = now.getDay()
        const currentHour = now.getHours()
        const currentMinute = now.getMinutes()

        const openTime = convertTimeToDate(openingHours.openTime)
        const closeTime = convertTimeToDate(openingHours.closeTime)
        return (
            currentDay === openingHours.weekDay &&
            currentHour >= openTime.getHours() &&
            currentMinute >= openTime.getMinutes() &&
            currentHour <= closeTime.getHours() &&
            currentMinute <= closeTime.getMinutes()
        )
    },

    getTodaysOpeningHours(openingHours: DefaultOpeningHour[]) {
        const now = new Date()
        const currentDay = now.getDay()
        return openingHours.find(
            (openingHour) => openingHour.weekDay === currentDay
        )
    }
}

function convertTimeToDate(time: string) {
    const [hours, minutes] = time.split(':')
    const date = new Date()
    date.setHours(parseInt(hours))
    date.setMinutes(parseInt(minutes))
    return date
}

export default OpeningHoursManager

