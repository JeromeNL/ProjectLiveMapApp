import axios from 'axios'
import { AuthAPI } from './libs/AuthAPI'
import { FacilityAPI } from './libs/FacilityAPI'
import { ResortAPI } from './libs/ResortAPI'

export class PhoenixAPI {
    public FacilityAPI!: FacilityAPI
    public AuthAPI!: AuthAPI
    public ResortAPI!: ResortAPI

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
        this.ResortAPI = new ResortAPI(axiosClient)
    }
}
