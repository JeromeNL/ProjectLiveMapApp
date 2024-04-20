import { Facility } from '../../model/Facility'
import { FacilityCategory } from '../../model/FacilityCategory'
import ProposedFacility from '../../model/ProposedFacility'
import { GenericAPI } from './abstract/GenericAPI'

export class FacilityAPI extends GenericAPI {
    upsertFacility(facility: ProposedFacility) {
        return this.axiosInstance.post(`/facilities/upsert`, facility)
    }

    getFacilities() {
        return this.axiosInstance.get<Facility[]>(`/facilities`)
    }

    getCategories() {
        return this.axiosInstance.get<FacilityCategory[]>(
            `/facilities/categories`
        )
    }
}

