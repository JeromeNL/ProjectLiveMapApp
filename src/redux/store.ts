import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './reducers/authReducer'
import { bottomSheetSlice } from './reducers/bottomSheetReducer'

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        bottomSheet: bottomSheetSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store

