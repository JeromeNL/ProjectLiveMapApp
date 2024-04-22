import React from 'react'
import MapView, { Callout, Marker } from 'react-native-maps'
import { useDispatch } from 'react-redux'
import IconManager from '../../../managers/IconManager'
import { Facility } from '../../../model/Facility'
import { bottomSheetSlice } from '../../../redux/reducers/bottomSheetReducer'
import { PinIcon } from './PinIcon'
import { View } from 'react-native'
import { Colors } from '../../../configuration/styles/Colors'

interface MapMarkerProps {
    facility: Facility
    mapRef: React.RefObject<MapView>
    hasServiceReports: boolean
}

const MapMarker = ({ facility, mapRef, hasServiceReports }: MapMarkerProps) => {
    const dispatch = useDispatch()
    const Icon = IconManager.getIcon(facility.category.iconName)
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
            anchor={{ x: 0.5, y: 1 }}
        >
            <PinIcon hex={'#FFAB33'} Icon={Icon} showExclamationMark={hasServiceReports} />
            <Callout tooltip={true} />
        </Marker>
    )
}

export default MapMarker

