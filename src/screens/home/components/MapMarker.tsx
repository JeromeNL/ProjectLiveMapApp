import React, { useEffect } from 'react'
import MapView, { Marker, MapMarker as RNMapMarker } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import { Colors } from '../../../configuration/styles/Colors'
import IconManager from '../../../managers/IconManager'
import { Facility } from '../../../model/Facility'
import { bottomSheetSlice } from '../../../redux/reducers/bottomSheetReducer'
import { RootState } from '../../../redux/store'

interface MapMarkerProps {
    facility: Facility
    mapRef: React.RefObject<MapView>
}

const MapMarker = ({ facility, mapRef }: MapMarkerProps) => {
    const isBottomSheetOpen = useSelector((state: RootState) => state.bottomSheet.isOpen)
    const markerRef = React.useRef<RNMapMarker | null>(null)
    const dispatch = useDispatch()
    const Icon = IconManager.getIcon(facility.iconName)
    const id = facility.id.toString() + '-marker'
    useEffect(() => {
        if(!isBottomSheetOpen) {
            markerRef.current?.hideCallout()
        }
    }, [isBottomSheetOpen])
    return (
        <Marker
            ref={markerRef}
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

