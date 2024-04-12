import { GenericAPI } from './abstract/GenericAPI'

export class AuthAPI extends GenericAPI {
    login(username: string) {
        return this.axiosInstance.post(`/users/${username}`)
    }
}
