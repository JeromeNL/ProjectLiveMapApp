import Facility from '../../model/Facility'
import { GenericAPI } from './abstract/GenericAPI'

export class FacilityAPI extends GenericAPI {
    async sendUpdateRequest(facility: Facility) {
        return this.axiosInstance.post(`/facility/requestchange`, facility)
    }
}

