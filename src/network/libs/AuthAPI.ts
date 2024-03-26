import { GenericAPI } from './abstract/GenericAPI'

export class AuthAPI extends GenericAPI {
    async login(username: string) {
        return await this.axiosInstance.post(`/users/${username}`)
    }
}
