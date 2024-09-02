import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AmenitiesState {
    amenities: string[];
}

const initialState: AmenitiesState = {
    amenities: [],
};

const amenitiesSlice = createSlice({
    name: 'amenities',
    initialState,
    reducers: {
        addAmenity: (state, action: PayloadAction<string>) => {
            state.amenities.push(action.payload);
        },
        clearAmenities: (state) => {
            state.amenities = [];
        },
        removeAmenity: (state, action: PayloadAction<number>) => {
            state.amenities.splice(action.payload, 1);
        },
    },
});

export const { addAmenity, clearAmenities, removeAmenity } = amenitiesSlice.actions;
export const amenitiesReducer = amenitiesSlice.reducer;
