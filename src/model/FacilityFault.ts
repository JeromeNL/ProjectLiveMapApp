import { number, object, string } from 'yup'

export interface FacilityFault {
    title: string,
    facilityId: number,
    description: string,
    type: string
}


export const facilityFaultSchema = object({
    title: string().required().max(300),
    facilityId: number().required(),
    description: string().required().max(300),
    type: string().required(),
})