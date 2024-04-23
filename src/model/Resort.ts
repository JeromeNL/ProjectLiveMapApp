import { Coordinate } from './Coordinate'

export interface Resort {
    id: number
    name: string
    northEast: Coordinate
    southWest: Coordinate
}

