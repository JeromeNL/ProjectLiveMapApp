import React, { useEffect, useState } from 'react'
import MapView from 'react-native-maps'
import { MapConfiguration } from '../../configuration/MapConfiguration'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation()
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
            // @ts-ignore
            <Button title="Create Notification" onPress={() => navigation.navigate('SettingsStack')} />
        </>
    )
}

export default HomeScreen
