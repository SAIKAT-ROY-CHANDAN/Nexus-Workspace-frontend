import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Room {
    _id: string;
    name: string;
    roomNo: number;
    floorNo: number;
    capacity: number;
    image: string;
    amenities: string[];
    isDeleted: boolean;
    pricePerSlot: number;
}


interface RoomState {
    rooms: Room[];
}

const initialState: RoomState = {
    rooms: [],
};

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        addRoom: (state, action) => {
            state.rooms.push(action.payload);
        },

        updateRoom: (state, action: PayloadAction<{ id: string; updatedData: Room }>) => {
            const { id, updatedData } = action.payload;
            const index = state.rooms.findIndex((room) => room._id === id);
            if (index !== -1) {
                state.rooms[index] = updatedData;
            }
        },
        removeRoom: (state, action: PayloadAction<string>) => {
            state.rooms = state.rooms.filter((room) => room._id !== action.payload);
        },
    },
});


export const { addRoom, updateRoom, removeRoom } = roomSlice.actions;

export const roomReducer = roomSlice.reducer;

