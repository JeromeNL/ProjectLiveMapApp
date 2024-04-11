import { Facility } from '../../model/Facility'
import ProposedFacility from '../../model/ProposedFacility'
import { GenericAPI } from './abstract/GenericAPI'
import { ServiceReport } from '../../model/ServiceReport'

export class FacilityAPI extends GenericAPI {
    async upsertFacility(facility: ProposedFacility) {
        return await this.axiosInstance.post(`/facilities/upsert`, facility)
    }

    async getFacilities() {
        return await this.axiosInstance.get<Facility[]>(`/facilities`)
    }
    
    postServiceReport(serviceReport: ServiceReport) {
        return this.axiosInstance.post<ServiceReport>(`/service_reports`, serviceReport)
    }
}

