import React, { useEffect } from 'react'
import { StyleSheet, type StyleProp, type ViewStyle } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { Colors } from '../configuration/styles/Colors'
import type { Resort } from '../model/Resort'
import { PhoenixAPI } from '../network/PhoenixAPI'
import { selectedResortSlice } from '../redux/reducers/selectedResortReducer'
import type { RootState } from '../redux/store'

interface ResortDropdownProps {
    style?: StyleProp<ViewStyle>
}

const ResortDropdown = ({ style }: ResortDropdownProps) => {
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
                if (!selectedResort) {
                    handleDropdownChange(res.data[0])
                }
            })
    }, [selectedResort])

    const handleDropdownChange = (resort: Resort) => {
        dispatch(selectedResortSlice.actions.setSelectedResort(resort))
        PhoenixAPI.getInstance().initializeAPIs(resort.id.toString())
    }

    return (
        <Dropdown
            style={[styles.dropdownStyle, style]}
            data={resorts}
            labelField={'name'}
            valueField={'id'}
            value={selectedResort ?? resorts[0]}
            onChange={handleDropdownChange}
        />
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

