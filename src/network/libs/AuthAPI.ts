import { GenericAPI } from './abstract/GenericAPI'

export class AuthAPI extends GenericAPI {
    login(username: string) {
        return this.axiosInstance.post(`/users/${username}`)
    }

    getServiceReports(userId: number) {
        return this.axiosInstance.get(`/users/${userId}/service-reports`)
    }

    getFacilityReports(userId: number) {    
        return this.axiosInstance.get(`/users/${userId}/facility-reports`)
    }
}
