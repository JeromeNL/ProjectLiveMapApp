import { GenericAPI } from './abstract/GenericAPI'

export class MapAPI extends GenericAPI {
	getMapMarkers() {
		// TODO: Replace with the actual API endpoint
		return this.axiosInstance.get('breeds/image/random')
	}
}
