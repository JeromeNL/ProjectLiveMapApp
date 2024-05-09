import { GenericAPI } from './abstract/GenericAPI'

export class PointsAPI extends GenericAPI {
    getTotalPoints(userId: number) {
        return this.axiosInstance.get<number>(`/users/${userId}/points/total`)
    }
}
