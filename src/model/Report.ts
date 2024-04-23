export interface Report {
    proposedFacility?: { name: string };
    title: string;
    status: number | undefined;
    description: string;
    createdAt: string;
}
