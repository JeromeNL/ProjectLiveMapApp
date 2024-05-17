import type { PointsTransaction } from "../../model/PointsTransaction";
import { GenericAPI } from "./abstract/GenericAPI";

export class PointsAPI extends GenericAPI {
	getTotalPoints(userId: number, resortId: number) {
		return this.axiosInstance.get<number>(`/users/${userId}/points/total`, {
			params: {
				resortId: resortId,
			},
		});
	}

	getTransactions(userId: number, resortId: number) {
		return this.axiosInstance.get<PointsTransaction[]>(
			`/users/${userId}/points/transactions`,
			{
				params: {
					resortId: resortId,
				},
			},
		);
	}
}
