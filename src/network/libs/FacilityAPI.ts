import { Facility } from '../../model/Facility'
import ProposedFacility from '../../model/ProposedFacility'
import { GenericAPI } from './abstract/GenericAPI'

export class FacilityAPI extends GenericAPI {
    async upsertFacility(facility: ProposedFacility) {
        return await this.axiosInstance.post(`/facilities/upsert`, facility)
    }

    async getFacilities() {
        return await this.axiosInstance.get<Facility[]>(`/facilities`)
    }
}

