import React from 'react'
import { Marker } from 'react-native-maps'
import { Colors } from '../../../configuration/styles/Colors'
import IconManager from '../../../managers/IconManager'
import ProposedFacility from '../../../model/ProposedFacility'

interface MapMarkerProps {
    facility: ProposedFacility
}

const MapMarker = ({ facility }: MapMarkerProps) => {
    const Icon = IconManager.getIcon(facility.iconName)
    return (
        <Marker
            coordinate={{
                latitude: facility.latitude,
                longitude: facility.longitude
            }}
            title={facility.name}
            description={facility.description}
        >
            <Icon color={Colors.black} />
        </Marker>
    )
}

export default MapMarker
