import { GenericAPI } from './abstract/GenericAPI'
import { ServiceReport } from '../../model/ServiceReport'
import { ServiceCategory } from '../../model/ServiceCategory'

export class ServiceReportAPI extends GenericAPI {

    getServiceReports() {
        return this.axiosInstance.get<ServiceReport[]>(
            `/facilities/service-reports`
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

