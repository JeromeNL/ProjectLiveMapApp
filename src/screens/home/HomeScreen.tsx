import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'
import MapView from 'react-native-maps'
import { MapConfiguration } from '../../configuration/MapConfiguration'
import Facility from '../../model/Facility'
import { PhoenixAPI } from '../../network/PhoenixAPI'

const HomeScreen = ({ navigation }: any) => {
    const mapRef = React.useRef<MapView>(null)
    const [region, _] = useState(MapConfiguration.region.initial)

    const [facilities, setFacilities] = useState<Facility[]>([])

    useEffect(() => {
        PhoenixAPI.getInstance()
            .FacilityAPI.getFacilities()
            .then((res) => {
                setFacilities(res.data)
            })
    }, [])

    useEffect(() => {
        if (!mapRef.current) {
            return
        }
        const bounds = MapConfiguration.region.bounds
        mapRef.current.setMapBoundaries(bounds.northeast, bounds.southwest)
    }, [])

    return (
        <>
            <MapView
                ref={mapRef}
                provider="google"
                customMapStyle={MapConfiguration.customMapStyle}
                style={{ flex: 1 }}
                region={region}
                showsUserLocation
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
                        facility: facilities[0]
                    })
                }
            />
        </>
    )
}

export default HomeScreen
