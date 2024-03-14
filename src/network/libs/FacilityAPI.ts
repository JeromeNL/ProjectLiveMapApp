import Facility from "../../model/Facility";
import { GenericAPI } from "./abstract/GenericAPI";

export class FacilityAPI extends GenericAPI {
	async sendUpdateRequest(request_body: Facility) {
		return this.axiosInstance.post(`/facility/requestchange`, request_body)
	}
}
