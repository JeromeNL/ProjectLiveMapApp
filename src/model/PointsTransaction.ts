import type { FacilityReport } from "./FacilityReport";
import type { ServiceReport } from "./ServiceReport";

export interface PointsTransaction {
	id: string;
	amount: number;
	facilityReport?: FacilityReport;
	serviceReport?: ServiceReport;
}
