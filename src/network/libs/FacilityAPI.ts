import { Facility } from '../../model/Facility'
import { FacilityCategory } from '../../model/FacilityCategory'
import ProposedFacility from '../../model/ProposedFacility'
import { ResortRelatedAPI } from './abstract/ResortRelatedAPI'

export class FacilityAPI extends ResortRelatedAPI {
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
