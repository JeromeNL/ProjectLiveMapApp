import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
    isAuthenticated: boolean
    username: string
}

const initialState: AuthState = {
    isAuthenticated: false,
    username: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true
            state.username = action.payload
        },
        logout(state) {
            state.isAuthenticated = false
            state.username = ''
        }
    }
})
