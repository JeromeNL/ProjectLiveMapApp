import { number, object, string } from 'yup'
import { ServiceCategory } from './ServiceCategory'

export interface ServiceReport {
    title: string,
    facilityId: number,
    description: string,
    category: ServiceCategory,
    categoryId: number, 
}


export const serviceReportSchema = object({
    title: string().required().max(300),
    facilityId: number().required(),
    description: string().required().max(300),
    category: object<ServiceCategory>().shape({
        id: number().required(),
        name: string().max(30).required()
    }),
    categoryId: number().required()
})