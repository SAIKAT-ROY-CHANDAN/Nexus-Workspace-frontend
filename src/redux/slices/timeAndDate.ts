import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedTime: {
        start: null,
        end: null
    },
    selectedDate: '',
    selectedHours: null
};

export const timeAndDateSlice = createSlice({
    name: 'timeAndDate',
    initialState,
    reducers: {
        setTime: (state, action) => {
            const { start, end } = action.payload;
            state.selectedTime.start = start;
            state.selectedTime.end = end;
        },
        setDate: (state, action) => {
            state.selectedDate = action.payload;
        },
        setHours: (state, action) => {
            state.selectedHours = action.payload;
        },
    }
})

export const { setTime, setDate, setHours } = timeAndDateSlice.actions;
export const timeAdnDateReducer = timeAndDateSlice.reducer;
