import { FacilityCategory } from "../FacilityCategory"
import { DefaultOpeningHour, SpecialOpeningHour } from "../OpeningHours"

export interface BaseFacility {
    name: string
    description: string
    longitude: number
    latitude: number
    categoryId: number
    category: FacilityCategory
    defaultOpeningHours: DefaultOpeningHour[]
    specialOpeningHours: SpecialOpeningHour[]
}

