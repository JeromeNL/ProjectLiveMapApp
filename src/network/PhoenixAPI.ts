import axios from 'axios'
import { AuthAPI } from './libs/AuthAPI'
import { FacilityAPI } from './libs/FacilityAPI'

export class PhoenixAPI {
    public FacilityAPI!: FacilityAPI
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
    }
}
