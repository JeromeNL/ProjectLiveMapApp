import { number, object, string } from 'yup'

type Facility = {
    facilityId?: number
    name: string
    description: string
    type: string
    longitude: number
    latitude: number
    iconUrl?: string
}

export const facilitySchema = object({
    facilityId: number(),
    name: string().required().max(10),
    description: string().required().max(100),
    type: string().required(),
    longitude: number().required(),
    latitude: number().required(),
    iconUrl: string()
})

export default Facility

