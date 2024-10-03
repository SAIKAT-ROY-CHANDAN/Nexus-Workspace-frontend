import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UploadState {
    links: string[];
    loading: boolean; 
}

const initialState: UploadState = {
    links: [],
    loading: false, 
};

const uploadSlice = createSlice({
    name: 'upload',
    initialState,
    reducers: {
        addLinks: (state, action: PayloadAction<string[]>) => {
            state.links.push(...action.payload);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        clearLinks: (state) => {
            state.links = [];
            state.loading = false;
        },
    },
});

export const { addLinks, setLoading, clearLinks } = uploadSlice.actions;
export const uploadReducer = uploadSlice.reducer;