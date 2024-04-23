import { IconPlus } from '@tabler/icons-react-native'
import { LocationObject } from 'expo-location'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { Region, UrlTile } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { MapConfiguration } from '../../configuration/MapConfiguration'
import { Colors } from '../../configuration/styles/Colors'
import { LocationManager } from '../../managers/LocationManager'
import { Facility } from '../../model/Facility'
import ProposedFacility from '../../model/ProposedFacility'
import { PhoenixAPI } from '../../network/PhoenixAPI'
import { RootState } from '../../redux/store'
import FloatingMapAction from './components/FloatingMapAction'
import MapMarker from './components/MapMarker'
import FacilityDetailBottomSheet from './facility/FacilityDetailBottomSheet'

const HomeScreen = ({ navigation }: any) => {
    const [locationState, setLocationState] = useState<LocationObject | null>(
        null
    )
    const mapRef = React.useRef<MapView>(null)
    const selectedResort = useSelector(
        (state: RootState) => state.selectedResort.selectedResort
    )

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
    }, [selectedResort])

    useEffect(() => {
        if (!mapRef.current || !selectedResort) {
            return
        }
        const northEast = {
            latitude: selectedResort.northEast.lat,
            longitude: selectedResort.northEast.lng
        }
        const southWest = {
            latitude: selectedResort.southWest.lat,
            longitude: selectedResort.southWest.lng
        }
        mapRef.current.setMapBoundaries(northEast, southWest)
    }, [selectedResort])

    let region: Region | undefined = undefined
    if (selectedResort) {
        region = {
            latitude:
                (selectedResort.northEast.lat + selectedResort.southWest.lat) /
                2,
            longitude:
                (selectedResort.northEast.lng + selectedResort.southWest.lng) /
                2,
            latitudeDelta: 0.011296856635078093,
            longitudeDelta: 0.018044660523925
        }
    }

    return (
        <>
            <MapView
                key={selectedResort?.id}
                ref={mapRef}
                provider="google"
                mapType="none"
                style={{ flex: 1 }}
                region={region}
                showsUserLocation
                minZoomLevel={15.7}
                maxZoomLevel={20}
            >
                <UrlTile urlTemplate={MapConfiguration.tile.urlTemplate} />
                {facilities.map((facility) => (
                    <MapMarker
                        key={facility.id}
                        facility={facility}
                        mapRef={mapRef}
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
            <FacilityDetailBottomSheet navigation={navigation} />
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
