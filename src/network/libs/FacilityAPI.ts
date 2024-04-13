import { Facility } from '../../model/Facility'
import ProposedFacility from '../../model/ProposedFacility'
import { GenericAPI } from './abstract/GenericAPI'
import { ServiceReport } from '../../model/ServiceReport'
import { ServiceCategory } from '../../model/ServiceCategory'

export class FacilityAPI extends GenericAPI {
    upsertFacility(facility: ProposedFacility) {
        return this.axiosInstance.post(`/facilities/upsert`, facility)
    }

    getFacilities() {
        return this.axiosInstance.get<Facility[]>(`/facilities`)
    }
    
    postServiceReport(serviceReport: ServiceReport) {
        return this.axiosInstance.post<ServiceReport>(`/facilities/service-reports`, serviceReport)
    }
    
    getServiceCategories() {
        return this.axiosInstance.get<ServiceCategory[]>(`/facilities/service-reports/categories`)
    }
}

