import { AxiosInstance } from 'axios'
import { GenericAPI } from './GenericAPI'

export abstract class ResortRelatedAPI extends GenericAPI {
    constructor(axiosInstance: AxiosInstance, resortId: string) {
        super(axiosInstance)
        this.addToBaseURL(`/resorts/${resortId}`)
    }
}

