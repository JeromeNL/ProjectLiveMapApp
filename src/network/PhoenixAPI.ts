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

        let hostName = process.env.API_URL

        if (!hostName) {
             hostName = Platform.OS === 'android' ? '10.0.2.2' : 'localhost'
        }

        const axiosClient = axios.create({
            baseURL: `http://${hostName}:5136`
        })
        this.AuthAPI = new AuthAPI(axiosClient)
        this.FacilityAPI = new FacilityAPI(axiosClient)
    }
}
