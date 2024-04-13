import { DefaultOpeningHour, SpecialOpeningHour } from '../OpeningHours'

export interface BaseFacility {
    name: string
    description: string
    type: string
    longitude: number
    latitude: number
    iconName: string
    defaultOpeningHours: DefaultOpeningHour[]
    specialOpeningHours: SpecialOpeningHour[]
}

