import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthRole {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    role: string;
    token: string
}

const initialState: AuthRole = {
    _id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    role: '',
    token: ''
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload
        },
        clearRole: (state) => {
            state.role = '';
        },
        setUserData: (state, action: PayloadAction<AuthRole>) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.address = action.payload.address;
            state.role = action.payload.role;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload; 
        },
    }
})

export const { setRole, clearRole, setUserData, setToken } = authSlice.actions
export const authReducer = authSlice.reducer