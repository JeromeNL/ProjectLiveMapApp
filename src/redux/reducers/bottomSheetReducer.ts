import { createSlice } from '@reduxjs/toolkit'
import { Facility } from '../../model/Facility'

interface BottomSheetState {
    isOpen: boolean
    facility?: Facility
}

const initialState: BottomSheetState = {
    isOpen: false
}

export const bottomSheetSlice = createSlice({
    name: 'bottomSheet',
    initialState,
    reducers: {
        openBottomSheet(state, action) {
            state.isOpen = true
            state.facility = action.payload
        },
        closeBottomSheet(state) {
            state.isOpen = false
            state.facility = undefined
        }
    }
})
