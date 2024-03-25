import Facility from '../../model/Facility'
import { GenericAPI } from './abstract/GenericAPI'

export class FacilityAPI extends GenericAPI {
    async upsertFacility(facility: Facility) {
        return await this.axiosInstance.post(`/facilities/upsert`, facility)
    }

    async getFacilities() {
        return await this.axiosInstance.get(`/facilities`)
    }
}

