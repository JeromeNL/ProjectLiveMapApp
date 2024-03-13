import { GenericAPI } from "./abstract/GenericAPI";

export class FacilityAPI extends GenericAPI {
	async sendUpdateRequest(request_body: any) {
		return this.axiosInstance.post(`/facility/requestchange`, request_body)
	}
}
