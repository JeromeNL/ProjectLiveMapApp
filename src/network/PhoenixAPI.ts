import axios from 'axios'
import { FacilityAPI } from './libs/FacilityAPI'
import { AuthAPI } from './libs/AuthAPI'
import { ReportAPI } from './libs/ReportAPI'
import { ResortAPI } from './libs/ResortAPI'
import { ServiceReportAPI } from './libs/ServiceReportAPI'
import { PointsAPI } from './libs/PointsAPI'

export class PhoenixAPI {
    public FacilityAPI!: FacilityAPI
    public ServiceReportAPI!: ServiceReportAPI
    public AuthAPI!: AuthAPI
    public ReportAPI!: ReportAPI
    public ResortAPI!: ResortAPI
    public PointsAPI!: PointsAPI

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

    initializeAPIs(resortId?: string) {
        const axiosClient = axios.create({
            baseURL: process.env.EXPO_PUBLIC_API_URL
        })
        this.AuthAPI = new AuthAPI(axiosClient)
        this.ResortAPI = new ResortAPI(axiosClient)
        this.ReportAPI = new ReportAPI(axiosClient)
        this.PointsAPI = new PointsAPI(axiosClient)
        if (resortId) {
            this.FacilityAPI = new FacilityAPI(axiosClient, resortId)
            this.ServiceReportAPI = new ServiceReportAPI(axiosClient, resortId)
        }
    }
}
