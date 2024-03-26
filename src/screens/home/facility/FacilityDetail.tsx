import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Facility } from '../../../model/Facility';

const FacilityDetailView = ({ route,  navigation }: any) => {
    const facility: Partial<Facility> = route.params?.facility

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Naam: {facility.name}</Text>
            <Text>Beschrijving: {facility.description}</Text>
            <Text>Type: {facility.type}</Text>
            <Button
                title="Faciliteitsgegevens wijzigen"
                onPress={() => navigation.navigate('UpsertFacility', { facility })} // Use `navigation` instead of `nav` if it's a prop
            />
        </View>
    );
};

export default FacilityDetailView;

