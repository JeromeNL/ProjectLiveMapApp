import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
    isAuthenticated: boolean
    username: string
    id: number
}

const initialState: AuthState = {
    isAuthenticated: false,
    username: '',
    id: -1
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true
            state.id = action.payload.id
            state.username = action.payload.username
            
            console.log(state.id)
            
            
        },
        logout(state) {
            state.isAuthenticated = false
            state.id = -1
            state.username = ''
        }
    }
})
