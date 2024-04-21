import { IconPlus } from '@tabler/icons-react-native'
import { LocationObject } from 'expo-location'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { UrlTile } from 'react-native-maps'
import { MapConfiguration } from '../../configuration/MapConfiguration'
import { Colors } from '../../configuration/styles/Colors'
import { LocationManager } from '../../managers/LocationManager'
import { Facility } from '../../model/Facility'
import ProposedFacility from '../../model/ProposedFacility'
import { PhoenixAPI } from '../../network/PhoenixAPI'
import FloatingMapAction from './components/FloatingMapAction'
import MapMarker from './components/MapMarker'
import FacilityDetailBottomSheet from './facility/FacilityDetailBottomSheet'
import { FacilityAPI } from '../../network/libs/FacilityAPI'

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
                mapType='none'
                style={{ flex: 1 }}
                region={region}
                showsUserLocation
                minZoomLevel={15.7}
                maxZoomLevel={20}
            >
                <UrlTile
                    urlTemplate={MapConfiguration.tile.urlTemplate}/>
                {facilities.map((facility) => (
                    <MapMarker
                        key={facility.id}
                        facility={facility}
                        mapRef={mapRef}
                        hasServiceReports={facility.serviceReports.length != 0}
                    />
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
            <FacilityDetailBottomSheet navigation={navigation}/>
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
