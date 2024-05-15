import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './reducers/authReducer'
import { bottomSheetSlice } from './reducers/bottomSheetReducer'
import { selectedResortSlice } from './reducers/selectedResortReducer'

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        bottomSheet: bottomSheetSlice.reducer,
        selectedResort: selectedResortSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store

