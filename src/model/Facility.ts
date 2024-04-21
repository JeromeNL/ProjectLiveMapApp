import { DefaultOpeningHour, SpecialOpeningHour } from './OpeningHours'
import { BaseFacility } from './base/BaseFacility'
import { ServiceReport } from './ServiceReport'

export interface Facility extends BaseFacility {
    id: number
    defaultOpeningHours: DefaultOpeningHour[]
    specialOpeningHours: SpecialOpeningHour[]
    serviceReports: ServiceReport[]
}

