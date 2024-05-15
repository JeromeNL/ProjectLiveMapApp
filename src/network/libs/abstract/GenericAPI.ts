import axios, { AxiosInstance } from 'axios'

export abstract class GenericAPI {
    protected axiosInstance: AxiosInstance

    constructor(axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance
    }

    protected addToBaseURL(path: string) {
        const clone = axios.create(this.axiosInstance.defaults)
        clone.defaults.baseURL = this.axiosInstance.defaults.baseURL + path
        this.axiosInstance = clone
    }
}
