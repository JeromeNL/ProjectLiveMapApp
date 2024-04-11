import { number, object, string } from 'yup'

export interface ServiceReport {
    title: string,
    facilityId: number,
    description: string,
    type: string
}


export const serviceReportSchema = object({
    title: string().required().max(300),
    facilityId: number().required(),
    description: string().required().max(300),
    type: string().required(),
})