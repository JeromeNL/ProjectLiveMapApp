import BottomSheet from '@gorhom/bottom-sheet'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

const FacilityDetailBottomSheet = ({ navigation }: any) => {
    const facility = useSelector(
        (state: RootState) => state.bottomSheet.facility
    )
    const bottomSheetRef = React.useRef<BottomSheet>(null)
    if (!facility) return null

    useEffect(() => {
        bottomSheetRef.current?.expand()
    }, [])

    return (
        <BottomSheet ref={bottomSheetRef}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ margin: 5, fontWeight: 'bold' }}>Naam</Text>
                <Text style={{ margin: 5 }}>{facility.name}</Text>
                <Text style={{ margin: 5, fontWeight: 'bold' }}>Type</Text>
                <Text style={{ margin: 5 }}>{facility.type}</Text>
                <Text style={{ margin: 5, fontWeight: 'bold' }}>
                    Beschrijving
                </Text>
                <Text style={{ margin: 5 }}>{facility.description}</Text>
                <View style={{ margin: 10 }}>
                    <Button
                        title="Faciliteitsgegevens wijzigen"
                        onPress={() =>
                            navigation.navigate('UpsertFacility', { facility })
                        }
                    />
                </View>
            </View>
        </BottomSheet>
    )
}

export default FacilityDetailBottomSheet

