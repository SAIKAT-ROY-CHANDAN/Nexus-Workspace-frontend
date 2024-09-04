import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedTime {
    start: string | null;
    end: string | null;
}

interface TimeAndDateState {
    selectedTime: SelectedTime;
    selectedDate: string;
    selectedHours?: number | null;
    selectedSlots: string[];
}

const initialState: TimeAndDateState = {
    selectedTime: {
        start: null,
        end: null
    },
    selectedDate: '',
    selectedHours: null,
    selectedSlots: []
};

export const timeAndDateSlice = createSlice({
    name: 'timeAndDate',
    initialState,
    reducers: {
        setTime: (state, action: PayloadAction<SelectedTime>) => {
            const { start, end } = action.payload;
            state.selectedTime.start = start;
            state.selectedTime.end = end;
        },
        setDate: (state, action: PayloadAction<string>) => {
            state.selectedDate = action.payload;
        },
        setHours: (state, action: PayloadAction<number>) => {
            state.selectedHours = action.payload;
        },
        toggleSlotSelection: (state, action: PayloadAction<string>) => {
            if (state.selectedSlots.includes(action.payload)) {
                state.selectedSlots = state.selectedSlots.filter(slot => slot !== action.payload);
            } else {
                state.selectedSlots.push(action.payload);
            }
        },
    }
});

export const { setTime, setDate, setHours, toggleSlotSelection } = timeAndDateSlice.actions;
export const timeAndDateReducer = timeAndDateSlice.reducer;

