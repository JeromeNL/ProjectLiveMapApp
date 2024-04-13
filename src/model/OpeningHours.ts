export interface DefaultOpeningHour {
    weekDay: number
    openTime: string
    closeTime: string
    facilityId: number
}

export interface SpecialOpeningHour {
    date: string
    weekDay: number
    openTime: string
    closeTime: string
    facilityId: number
}
