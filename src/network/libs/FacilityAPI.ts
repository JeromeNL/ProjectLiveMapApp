import Facility from '../../model/Facility'
import { GenericAPI } from './abstract/GenericAPI'

export class FacilityAPI extends GenericAPI {
    async updateFacility(facility: Facility) {
        return await this.axiosInstance.post(
            `/facility/requestchange`,
            facility
        )
    }

    async createFacility(facility: Facility) {
        return await this.axiosInstance.post(`/facility`, facility)
    }

    async getFacilities() {
        return await this.axiosInstance.get(`/facilities`)
    }
}

