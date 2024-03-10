import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import FlagIcon from '../../../assets/icons/flag.svg'
import { MapConfiguration } from '../../configuration/MapConfiguration'
import FloatingMapAction from './components/FloatingMapAction'

const HomeScreen = () => {
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
            <View style={styles.floatingActionContainer}>
                <FloatingMapAction icon={<FlagIcon />} />
                <FloatingMapAction icon={<FlagIcon />} />
                <FloatingMapAction icon={<FlagIcon />} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    floatingActionContainer: {
        position: 'absolute',
        bottom: 50,
        right: 4
    }
})

export default HomeScreen
