import { number, object, string } from 'yup'
import { BaseFacility } from './base/BaseFacility'

interface ProposedFacility extends BaseFacility {
    facilityId?: number
}

export const facilitySchema = object({
    facilityId: number(),
    name: string().required().max(20),
    description: string().required().max(100),
    longitude: number().required(),
    latitude: number().required(),
    categoryId: number().required(),
    category: object({
        id: number().required(),
        name: string().required(),
        description: string().required(),
        iconName: string().required()
    })
})

export default ProposedFacility

