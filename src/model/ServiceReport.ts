import { number, object, string } from 'yup'

export interface ServiceReport {
    title: string,
    facilityId: number,
    description: string,
    category: string
}


export const serviceReportSchema = object({
    title: string().required().max(300),
    facilityId: number().required(),
    description: string().required().max(300),
    category: string().required(),
})