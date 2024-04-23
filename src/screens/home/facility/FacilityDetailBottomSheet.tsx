import BottomSheet from '@gorhom/bottom-sheet'
import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import IsFacilityOpenText from '../../../components/IsFacilityOpenText'
import OpeningHoursView from '../../../components/OpeningHoursView'
import OpeningHoursManager from '../../../managers/OpeningHoursManager'
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

    let isAlwaysOpen = false
    if (facility) {
        const openingHours =
            OpeningHoursManager.mergeDefaultAndSpecialOpeningHours(
                facility.defaultOpeningHours,
                facility.specialOpeningHours
            )
        isAlwaysOpen = OpeningHoursManager.isAlwaysOpen(openingHours)
    }

    useEffect(() => {
        if (facility) {
            bottomSheetRef.current?.expand()
        }
    }, [facility])

    return (
        <BottomSheet
            index={-1}
            ref={bottomSheetRef}
            snapPoints={['80%', '50%']}
            enablePanDownToClose
            onClose={() => {
                dispatch(bottomSheetSlice.actions.closeBottomSheet())
            }}
        >
            {facility && (
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 18
                            }}
                        >
                            {facility.name}
                        </Text>
                        <IsFacilityOpenText
                            style={{ marginLeft: 5 }}
                            facility={facility}
                        />
                    </View>
                    <Text>{facility.category.name}</Text>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            marginTop: 10
                        }}
                    >
                        Beschrijving
                    </Text>
                    <Text>{facility.description}</Text>
                    <View
                        style={{
                            marginTop: 15,
                            marginBottom: 2
                        }}
                    >
                        {!isAlwaysOpen && (
                            <OpeningHoursView
                                defaultOpeningHour={
                                    facility.defaultOpeningHours
                                }
                                specialOpeningHour={
                                    facility.specialOpeningHours
                                }
                            />
                        )}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default FacilityDetailBottomSheet

