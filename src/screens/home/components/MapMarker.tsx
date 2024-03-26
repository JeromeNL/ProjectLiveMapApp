import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useDispatch } from 'react-redux'
import { Colors } from '../../../configuration/styles/Colors'
import IconManager from '../../../managers/IconManager'
import { Facility } from '../../../model/Facility'
import { bottomSheetSlice } from '../../../redux/reducers/bottomSheetReducer'

interface MapMarkerProps {
    facility: Facility
    mapRef: React.RefObject<MapView>
}

const MapMarker = ({ facility, mapRef }: MapMarkerProps) => {
    const dispatch = useDispatch()
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
                dispatch(bottomSheetSlice.actions.openBottomSheet(facility))
                const region = {
                    // Move the map a bit up so the marker is not in the center
                    latitude: facility.latitude - 0.0005,
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

