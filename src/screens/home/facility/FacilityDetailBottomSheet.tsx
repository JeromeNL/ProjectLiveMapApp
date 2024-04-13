import BottomSheet from '@gorhom/bottom-sheet'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import OpeningHoursView from '../../../components/OpeningHoursView'
import ProposedFacility from '../../../model/ProposedFacility'
import { bottomSheetSlice } from '../../../redux/reducers/bottomSheetReducer'
import { RootState } from '../../../redux/store'

interface FacilityDetailBottomSheetProps {
    navigation: any
}

const FacilityDetailBottomSheet = ({
    navigation
}: FacilityDetailBottomSheetProps) => {
    const facility = useSelector(
        (state: RootState) => state.bottomSheet.facility
    )
    const bottomSheetRef = React.useRef<BottomSheet>(null)

    const dispatch = useDispatch()

    useEffect(() => {
        if (facility) {
            bottomSheetRef.current?.expand()
        }
    }, [facility])

    return (
        <BottomSheet
            index={-1}
            ref={bottomSheetRef}
            snapPoints={['80%', '45%']}
            enablePanDownToClose
            onClose={() => {
                dispatch(bottomSheetSlice.actions.closeBottomSheet())
            }}
        >
            {facility && (
                <View
                    style={{
                        flex: 1
                    }}
                >
                    <Text
                        style={{
                            marginHorizontal: 20,
                            fontWeight: 'bold',
                            fontSize: 18
                        }}
                    >
                        {facility.name}
                    </Text>
                    <Text style={{ marginHorizontal: 20 }}>
                        {facility.type}
                    </Text>
                    <Text
                        style={{
                            marginLeft: 20,
                            fontWeight: 'bold',
                            marginTop: 10
                        }}
                    >
                        Beschrijving
                    </Text>
                    <Text style={{ marginHorizontal: 20 }}>
                        {facility.description}
                    </Text>
                    <View
                        style={{
                            marginHorizontal: 20,
                            marginTop: 15,
                            marginBottom: 2
                        }}
                    >
                        <OpeningHoursView
                            defaultOpeningHour={facility.defaultOpeningHours}
                            specialOpeningHour={facility.specialOpeningHours}
                        />
                        <Button
                            title="Faciliteitsgegevens wijzigen"
                            onPress={() => {
                                const proposedFacility: ProposedFacility = {
                                    ...facility,
                                    facilityId: facility.id
                                }
                                navigation.navigate('UpsertFacility', {
                                    facility: proposedFacility
                                })
                            }}
                        />
                    </View>
                    <View
                        style={{
                            marginHorizontal: 20,
                            marginTop: 3,
                            marginBottom: 2
                        }}
                    >
                        <Button
                            title="Storing melden"
                            onPress={() => {
                                const proposedFacility: ProposedFacility = {
                                    ...facility,
                                    facilityId: facility.id
                                }
                                navigation.navigate('ServiceReport', {
                                    facility: proposedFacility
                                })
                            }}
                        />
                    </View>
                </View>
            )}
        </BottomSheet>
    )
}

export default FacilityDetailBottomSheet

