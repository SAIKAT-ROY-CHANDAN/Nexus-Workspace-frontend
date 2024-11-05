import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UploadState {
    files: File[];
    links: string[];
    loading: boolean;
}

const initialState: UploadState = {
    files: [],
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
        addFiles: (state, action: PayloadAction<File[]>) => {
            state.files.push(...action.payload);
        },
    },
});

export const { addLinks, setLoading, clearLinks, addFiles } = uploadSlice.actions;
export const uploadReducer = uploadSlice.reducer;