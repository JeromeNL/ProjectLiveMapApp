import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Colors } from '../../../configuration/styles/Colors'
import IconManager from '../../../managers/IconManager'
import { Facility } from '../../../model/Facility'

interface MapMarkerProps {
    facility: Facility
    mapRef: React.RefObject<MapView>
}

const MapMarker = ({ facility, mapRef }: MapMarkerProps) => {
    const Icon = IconManager.getIcon(facility.iconName)
    const id = facility.id.toString() + '-marker'
    return (
        <Marker
            coordinate={{
                latitude: facility.latitude,
                longitude: facility.longitude
            }}
            id={id}
            title={facility.name}
            description={facility.description}
            onPress={() => {
                const region = {
                    // Move the map a bit up so the marker is not in the center
                    latitude: facility.latitude - 0.0015,
                    longitude: facility.longitude
                }
                mapRef.current?.animateToRegion(
                    {
                        ...region,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
                    },
                    500
                )
            }}
        >
            <Icon color={Colors.black} />
        </Marker>
    )
}

export default MapMarker

