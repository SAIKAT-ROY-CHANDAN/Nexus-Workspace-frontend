import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedTime: {
        start: null,
        end: null
    },
    selectedDate: null,
    selectedHours: null
};

export const timeAndDateSlice = createSlice({
    name: 'timeAndDate',
    initialState,
    reducers: {
        setTime: (state, action) => {
            const { start, end } = action.payload;
            console.log('Setting time:', { start, end });
            state.selectedTime.start = start;
            state.selectedTime.end = end;
        },
        setDate: (state, action) => {
            console.log('Setting date:', action.payload);
            state.selectedDate = action.payload;
        },
        setHours: (state, action) => {
            console.log('hours', action.payload);
            state.selectedHours = action.payload;
        },
    }
})

export const { setTime, setDate, setHours } = timeAndDateSlice.actions;
export const timeAdnDateReducer = timeAndDateSlice.reducer;
