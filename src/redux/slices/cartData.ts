import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rooms: [],
};

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        addRoom: (state, action) => {
            console.log(action.payload);
            state.rooms.push(action.payload);
        },

        updateRoom: (state, action) => {
            const { id, updatedData } = action.payload;
            const index = state.rooms.findIndex((room) => room.room === id);
            if (index !== -1) {
                state.rooms[index] = updatedData;
            }
        },
        removeRoom: (state, action) => {
            state.rooms = state.rooms.filter((room) => room.room !== action.payload);
        },
    },
});


export const { addRoom, updateRoom, removeRoom } = roomSlice.actions;

export const roomReducer = roomSlice.reducer;

