import axios from 'axios'
import { MapAPI } from './libs/MapAPI'
import { FacilityAPI } from './libs/FacilityAPI'

export class PhoenixAPI {
	public MapAPI!: MapAPI
	public FacilityAPI!: FacilityAPI

	private static instance: PhoenixAPI

	constructor() {
		this.initializeAPIs()
	}

	public static getInstance() {
		if (!PhoenixAPI.instance) {
			PhoenixAPI.instance = new PhoenixAPI()
		}
		return PhoenixAPI.instance
	}

	initializeAPIs() {
		const axiosClient = axios.create({
			// TODO: Replace with the actual API URL
			baseURL: 'http://10.0.2.2:5136',
		})
		this.MapAPI = new MapAPI(axiosClient)
		this.FacilityAPI = new FacilityAPI(axiosClient)
	}
}
