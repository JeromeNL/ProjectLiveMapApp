import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
    isAuthenticated: boolean
    username: string | null
    id: string | null
}

const initialState: AuthState = {
    isAuthenticated: false,
    username: null,
    id: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true
            state.id = action.payload.id
            state.username = action.payload.username
        },
        logout(state) {
            state.isAuthenticated = false
            state.id = null
            state.username = ''
        }
    }
})
