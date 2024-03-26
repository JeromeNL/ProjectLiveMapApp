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

    useEffect(() => {
        bottomSheetRef.current?.expand()
    }, [facility])

    return (
        <BottomSheet index={-1} ref={bottomSheetRef} snapPoints={['80%', '40%']} enablePanDownToClose>
            {facility && (
            <View
                style={{
                    flex: 1,
                }}
            >
                <Text style={{ marginHorizontal: 20, fontWeight: 'bold', fontSize: 18 }}>{facility.name}</Text>
                <Text style={{ marginHorizontal: 20}}>{facility.type}</Text>
                <Text style={{ marginLeft: 20, fontWeight: 'bold' , marginTop: 10 }}>
                    Beschrijving
                </Text>
                <Text style={{ marginHorizontal: 20 }}>{facility.description}</Text>
                <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
                    <Button
                        title="Faciliteitsgegevens wijzigen"
                        onPress={() =>
                            navigation.navigate('UpsertFacility', { facility })
                        }
                    />
                </View>
            </View>
            )}
        </BottomSheet>
    )
}

export default FacilityDetailBottomSheet

