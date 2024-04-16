import { FacilityCategory } from '../FacilityCategory'

export interface BaseFacility {
    name: string
    description: string
    longitude: number
    latitude: number
    categoryId: number
    category: FacilityCategory
}

