import { createSlice } from "@reduxjs/toolkit";

interface AuthRole {
    role: string
}

const initialState: AuthRole = {
    role: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload
        }
    }
})

export const { setRole } = authSlice.actions
export const authReducer = authSlice.reducer