import { number, object, string } from 'yup'

interface ProposedFacility extends BaseFacility {
    facilityId?: number
}

export const facilitySchema = object({
    facilityId: number(),
    name: string().required().max(20),
    description: string().required().max(100),
    type: string().required(),
    longitude: number().required(),
    latitude: number().required(),
    iconName: string().required()
})

export default ProposedFacility

