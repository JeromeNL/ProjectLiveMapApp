import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { Colors } from '../../../configuration/styles/Colors'
import { Resort } from '../../../model/Resort'
import { PhoenixAPI } from '../../../network/PhoenixAPI'
import { selectedResortSlice } from '../../../redux/reducers/selectedResortReducer'
import { RootState } from '../../../redux/store'

const ResortDropdown = () => {
    const [resorts, setResorts] = React.useState<Resort[]>([])
    const dispatch = useDispatch()
    const selectedResort = useSelector(
        (state: RootState) => state.selectedResort.selectedResort
    )

    useEffect(() => {
        PhoenixAPI.getInstance()
            .ResortAPI.getResorts()
            .then((res) => {
                setResorts(res.data)
            })
    }, [])

    const handleDropdownChange = (value: Resort) => {
        const resort = resorts.find((r) => r.id === value.id)
        if (!resort) return
        dispatch(selectedResortSlice.actions.setSelectedResort(resort))
    }

    return (
        <View style={{ width: '80%' }}>
            <Dropdown
                style={styles.dropdownStyle}
                data={resorts}
                labelField={'name'}
                valueField={'id'}
                value={selectedResort ?? resorts[0]}
                onChange={handleDropdownChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    dropdownStyle: {
        borderColor: Colors.darkGray,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: 200
    }
})

export default ResortDropdown

