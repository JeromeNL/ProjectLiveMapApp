import { DefaultOpeningHour, SpecialOpeningHour } from './OpeningHours'
import { BaseFacility } from './base/BaseFacility'

export interface Facility extends BaseFacility {
    id: number
    defaultOpeningHours: DefaultOpeningHour[]
    specialOpeningHours: SpecialOpeningHour[]
}

