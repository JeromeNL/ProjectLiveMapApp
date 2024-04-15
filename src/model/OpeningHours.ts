export interface DefaultOpeningHour extends BaseOpeningHour {}

export interface SpecialOpeningHour extends BaseOpeningHour {
    date: string
}

interface BaseOpeningHour {
    weekDay: number
    openTime: string
    closeTime: string
    facilityId: number
}

