import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'
import MapView from 'react-native-maps'
import { MapConfiguration } from '../../configuration/MapConfiguration'
import Facility from '../../model/Facility'

const HomeScreen = ({ navigation }: any) => {
    const mapRef = React.useRef<MapView>(null)
    const [region, _] = useState(MapConfiguration.region.initial)

    useEffect(() => {
        if (!mapRef.current) {
            return
        }
        const bounds = MapConfiguration.region.bounds
        mapRef.current.setMapBoundaries(bounds.northeast, bounds.southwest)
    }, [])

    const mockFacility: Facility = {
        facilityId: 1,
        name: 'Test Facility',
        type: 'Test Type',
        description: 'Test Description',
        longitude: 6.123,
        latitude: 5.163,
        iconUrl: 'Test Icon URL'
    }

    return (
        <>
            <MapView
                ref={mapRef}
                provider="google"
                customMapStyle={MapConfiguration.customMapStyle}
                style={{ flex: 1 }}
                region={region}
                showsUserLocation
                zoomControlEnabled
                minZoomLevel={15.7}
                maxZoomLevel={20}
            />
            <Button
                title="Create Facility"
                onPress={() => navigation.push('UpsertFacility')}
            />
            <Button
                title="Update Facility"
                onPress={() =>
                    navigation.push('UpsertFacility', {
                        facility: mockFacility
                    })
                }
            />
        </>
    )
}

export default HomeScreen
