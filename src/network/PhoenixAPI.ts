import axios from 'axios'
import { Platform } from 'react-native'
import { FacilityAPI } from './libs/FacilityAPI'
import { AuthAPI } from './libs/AuthAPI'

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
