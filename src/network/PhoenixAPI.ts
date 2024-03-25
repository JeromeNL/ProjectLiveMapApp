import axios from 'axios'
import { Platform } from 'react-native'
import { FacilityAPI } from './libs/FacilityAPI'

export class PhoenixAPI {
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
        const localhost = Platform.OS === 'android' ? '10.0.2.2' : 'localhost'
        const axiosClient = axios.create({
            // TODO: Replace with the actual API URL
            baseURL: `http://${localhost}:5136`
        })
        this.FacilityAPI = new FacilityAPI(axiosClient)
    }
}
