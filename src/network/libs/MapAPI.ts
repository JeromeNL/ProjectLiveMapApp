import { GenericAPI } from './abstract/GenericAPI'
import axios from 'axios'

export class MapAPI extends GenericAPI {
    async getMapMarkers() {
        // TODO: Replace with the actual API endpoint
        return axios
            .get('https://dog.ceo/api/breeds/image/random')
            .catch((error) => console.log(error))
    }
}
