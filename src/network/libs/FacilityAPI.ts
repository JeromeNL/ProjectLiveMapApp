import Facility from '../../model/Facility'
import { GenericAPI } from './abstract/GenericAPI'

export class FacilityAPI extends GenericAPI {
    async updateFacility(facility: Facility) {
        return this.axiosInstance.post(`/facility/requestchange`, facility)
    }

    async createFacility(facility: Facility) {
        return this.axiosInstance.post(`/facility/requestchange`, facility)
    }
}

