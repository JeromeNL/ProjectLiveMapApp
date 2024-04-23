import { AxiosInstance } from 'axios'
import { GenericAPI } from './GenericAPI'

export abstract class ResortRelatedAPI extends GenericAPI {
    constructor(axiosInstance: AxiosInstance) {
        const resortId = 1
        super(axiosInstance)
        this.addToBaseURL(`/resorts/${resortId}`)
    }
}

