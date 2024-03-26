import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Facility } from '../../../model/Facility';

const FacilityDetailView = ({ route, navigation }: any) => {
    const facility: Partial<Facility> = route.params?.facility

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{margin: 5, fontWeight: 'bold'}}>Naam</Text>
            <Text style={{margin: 5}}>{facility.name}</Text>
            <Text style={{margin: 5, fontWeight: 'bold'}}>Type</Text>
            <Text style={{margin: 5}}>{facility.type}</Text>
            <Text style={{margin: 5, fontWeight: 'bold'}}>Beschrijving</Text>
            <Text style={{margin: 5}}>{facility.description}</Text>
            <View style={{margin: 10}}>
                <Button
                    title="Faciliteitsgegevens wijzigen"
                    onPress={() => navigation.navigate('UpsertFacility', { facility })}
                />
            </View>
        </View>
    );
};

export default FacilityDetailView;

