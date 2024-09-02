import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UploadState {
    links: string[];
}

const initialState: UploadState = {
    links: [],
};

const uploadSlice = createSlice({
    name: 'upload',
    initialState,
    reducers: {
        addLinks: (state, action: PayloadAction<string[]>) => {
            state.links.push(...action.payload);
        },
        clearLinks: (state) => {
            state.links = [];
        },
    },
});


export const { addLinks, clearLinks } = uploadSlice.actions;
export const uploadReducer = uploadSlice.reducer;
