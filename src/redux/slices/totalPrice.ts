import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  totalPrice: number;
}

const initialState: BookingState = {
  totalPrice: 0,
};

export const totalPriceSlice = createSlice({
  name: 'totalPrice',
  initialState,
  reducers: {
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { setTotalPrice } = totalPriceSlice.actions;

export const totalPriceSliceReducer = totalPriceSlice.reducer;
