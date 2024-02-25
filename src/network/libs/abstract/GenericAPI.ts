import { AxiosInstance } from 'axios'

export abstract class GenericAPI {
	protected axiosInstance: AxiosInstance

	constructor(axiosInstance: AxiosInstance) {
		this.axiosInstance = axiosInstance
	}
}
