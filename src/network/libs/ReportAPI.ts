import { ResortRelatedAPI } from "./abstract/ResortRelatedAPI";

export class ReportAPI extends ResortRelatedAPI {
    getServiceReports(userId: number) {
        return this.axiosInstance.get(`/users/${userId}/service-reports`)
    }

    getFacilityReports(userId: number) {    
        return this.axiosInstance.get(`/users/${userId}/facility-reports`)
    }
}
