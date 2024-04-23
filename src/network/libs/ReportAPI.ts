import { GenericAPI } from './abstract/GenericAPI'

export class ReportAPI extends GenericAPI {
    getServiceReports(userId: number) {
        return this.axiosInstance.get(`/users/${userId}/service-reports`)
    }

    getFacilityReports(userId: number) {
        return this.axiosInstance.get(`/users/${userId}/facility-reports`)
    }
}

