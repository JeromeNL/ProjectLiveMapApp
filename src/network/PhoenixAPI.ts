import axios from 'axios'
import { Platform } from 'react-native'
import { FacilityAPI } from './libs/FacilityAPI'
import { AuthAPI } from './libs/AuthAPI'
import { ServiceReportAPI } from './libs/ServiceReportAPI'

export class PhoenixAPI {
    public FacilityAPI!: FacilityAPI
    public ServiceReportAPI!: ServiceReportAPI
    public AuthAPI!: AuthAPI

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
            baseURL: process.env.EXPO_PUBLIC_API_URL
        })
        this.AuthAPI = new AuthAPI(axiosClient)
        this.FacilityAPI = new FacilityAPI(axiosClient)
        this.ServiceReportAPI = new ServiceReportAPI(axiosClient)
    }
}
