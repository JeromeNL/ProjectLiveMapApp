import { ServiceReport } from '../../model/ServiceReport'
import { ServiceCategory } from '../../model/ServiceCategory'
import { ResortRelatedAPI } from "./abstract/ResortRelatedAPI";

export class ServiceReportAPI extends ResortRelatedAPI {

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

