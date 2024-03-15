import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'
import MapView from 'react-native-maps'
import { MapConfiguration } from '../../configuration/MapConfiguration'

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
                title="Create Notification"
                onPress={() => navigation.push('NotificationCreate')}
            />
        </>
    )
}

export default HomeScreen
