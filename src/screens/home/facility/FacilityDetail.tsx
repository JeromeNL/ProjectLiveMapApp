import React from 'react';
import { View, Text, Image } from 'react-native';
import Facility from '../../../model/Facility';
import IconManager from '../../../managers/IconManager';

const FacilityDetailView = ({ route }: any) => {
    const facility: Partial<Facility> = route.params?.facility

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Naam: {facility.name}</Text>
            <Text>Beschrijving: {facility.description}</Text>
            <Text>Type: {facility.type}</Text>
            {facility.iconUrl && <Image source={{ uri: facility.iconUrl }} style={{ width: 100, height: 100 }} />}
        </View>
    );
};

export default FacilityDetailView;

