import axios from 'axios'
import { MapAPI } from './libs/MapAPI'

export class PhoenixAPI {
	public MapAPI!: MapAPI

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
			baseURL: 'https://dog.ceo/api/',
		})
		this.MapAPI = new MapAPI(axiosClient)
	}
}
