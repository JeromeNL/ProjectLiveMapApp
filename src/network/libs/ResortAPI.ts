import { Resort } from '../../model/Resort'
import { GenericAPI } from './abstract/GenericAPI'

export class ResortAPI extends GenericAPI {
    getResorts() {
        return this.axiosInstance.get<Resort[]>('/resorts')
    }
}

