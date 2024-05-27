import type { FacilityReport } from "./FacilityReport";
import type { ServiceReport } from "./ServiceReport";
import type { Voucher } from "./Voucher";

export interface PointsTransaction {
	id: string;
	amount: number;
	facilityReport?: FacilityReport;
	serviceReport?: ServiceReport;
	voucher?: Voucher;
}
