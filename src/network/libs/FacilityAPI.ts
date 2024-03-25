import Facility from '../../model/Facility'
import { GenericAPI } from './abstract/GenericAPI'

export class FacilityAPI extends GenericAPI {
    async updateFacility(facility: Facility) {
        return this.axiosInstance.post(`/proposed-facilities/request`, facility)
    }

    async createFacility(facility: Facility) {
        return this.axiosInstance.post(`/proposed-facilities/create`, facility)
    }

    async getFacilities() {
        return this.axiosInstance.get(`/facilities`)
    }
}

