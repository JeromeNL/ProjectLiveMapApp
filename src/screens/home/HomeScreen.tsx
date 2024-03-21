import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import MapView from 'react-native-maps'
import FlagIcon from '../../../assets/icons/flag.svg'
import { MapConfiguration } from '../../configuration/MapConfiguration'
import Facility from '../../model/Facility'
import { PhoenixAPI } from '../../network/PhoenixAPI'
import { Colors } from '../../configuration/styles/Colors'
import FloatingMapAction from './components/FloatingMapAction'

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
            <View style={styles.floatingActionContainer}>
                <FloatingMapAction
                    icon={<FlagIcon stroke={Colors.white} />}
                    onPress={() => {
                        console.log('Floating action pressed')
                    }}
                />
            </View>
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

const styles = StyleSheet.create({
    floatingActionContainer: {
        position: 'absolute',
        bottom: 50,
        right: 4
    }
})

export default HomeScreen
