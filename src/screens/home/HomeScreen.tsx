import { IconPlus } from '@tabler/icons-react-native'
import { LocationObject } from 'expo-location'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import { MapConfiguration } from '../../configuration/MapConfiguration'
import { Colors } from '../../configuration/styles/Colors'
import { LocationManager } from '../../managers/LocationManager'
import { Facility } from '../../model/Facility'
import ProposedFacility from '../../model/ProposedFacility'
import { PhoenixAPI } from '../../network/PhoenixAPI'
import FloatingMapAction from './components/FloatingMapAction'
import MapMarker from './components/MapMarker'

const HomeScreen = ({ navigation }: any) => {
    const [locationState, setLocationState] = useState<LocationObject | null>(
        null
    )
    const mapRef = React.useRef<MapView>(null)
    const [region, _] = useState(MapConfiguration.region.initial)

    const [facilities, setFacilities] = useState<Facility[]>([])

    useEffect(() => {
        PhoenixAPI.getInstance()
            .FacilityAPI.getFacilities()
            .then((res) => {
                setFacilities(res.data)
            })

        async function handle() {
            const location = await LocationManager.getCurrentLocation()
            if (!location) {
                return
            }
            setLocationState(location)
        }

        handle()
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
            >
                {facilities.map((facility) => (
                    <MapMarker key={facility.id} facility={facility} mapRef={mapRef}/>
                ))}
            </MapView>
            {locationState && (
                <View style={styles.floatingActionContainer}>
                    <FloatingMapAction
                        icon={<IconPlus color={Colors.white} />}
                        onPress={async () => {
                            const currentLocation =
                                await LocationManager.getCurrentLocation()
                            if (!currentLocation) {
                                return
                            }
                            const partialFacility: Partial<ProposedFacility> = {
                                latitude: currentLocation.coords.latitude,
                                longitude: currentLocation.coords.longitude
                            }
                            navigation.push('UpsertFacility', {
                                facility: partialFacility
                            })
                        }}
                    />
                </View>
            )}
            <Button
                title="Update eerste faciliteit"
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
