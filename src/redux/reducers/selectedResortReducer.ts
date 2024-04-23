import { createSlice } from '@reduxjs/toolkit'
import { Resort } from '../../model/Resort'

interface SelectedResortState {
    selectedResort: Resort | null
}

const initialState: SelectedResortState = {
    selectedResort: null
}

export const selectedResortSlice = createSlice({
    name: 'selectedResort',
    initialState,
    reducers: {
        setSelectedResort(state, action) {
            state.selectedResort = action.payload
        }
    }
})

