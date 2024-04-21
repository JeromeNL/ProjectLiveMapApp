import { number, object, string } from 'yup'
import { ServiceCategory } from './ServiceCategory'

export interface ServiceReport {
    id: number,
    title: string,
    facilityId: number,
    description: string,
    serviceReportCategory?: ServiceCategory,
    serviceReportCategoryId: number, 
    userId: number,
    createdAt?: string
}


export const serviceReportSchema = object({
    title: string().required().max(300),
    facilityId: number().required(),
    description: string().required().max(300),
    serviceReportCategory: object<ServiceCategory>().shape({
        id: number().required(),
        name: string().max(30).required()
    }),
    serviceReportCategoryId: number().required(),
    userId: number().required(),
})