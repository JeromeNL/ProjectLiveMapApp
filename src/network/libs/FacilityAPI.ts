import { Facility } from '../../model/Facility'
import { FacilityCategory } from '../../model/FacilityCategory'
import ProposedFacility from '../../model/ProposedFacility'
import { ServiceCategory } from '../../model/ServiceCategory'
import { ServiceReport } from '../../model/ServiceReport'
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

    postServiceReport(serviceReport: ServiceReport) {
        return this.axiosInstance.post<ServiceReport>(
            `/facilities/service-reports`,
            serviceReport
        )
    }

    getServiceCategories() {
        return this.axiosInstance.get<ServiceCategory[]>(
            `/facilities/service-reports/categories`
        )
    }
}

