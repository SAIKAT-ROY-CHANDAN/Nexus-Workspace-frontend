import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  totalPrice: number;
  bookingIds: string[]
}

const initialState: BookingState = {
  totalPrice: 0,
  bookingIds: []
};

export const totalPriceSlice = createSlice({
  name: 'totalPrice',
  initialState,
  reducers: {
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
    setBookingIds: (state, action) => {
      state.bookingIds = action.payload;
    },
    clearBookings: (state) => {
      state.totalPrice = 0;
      state.bookingIds = [];
    },
  },
});

export const { setTotalPrice, setBookingIds, clearBookings } = totalPriceSlice.actions;

export const totalPriceSliceReducer = totalPriceSlice.reducer;
