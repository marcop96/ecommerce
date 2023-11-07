import { createSlice } from "@reduxjs/toolkit";

const cartCountSlice = createSlice({
  name: "cartCount",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state,action) => state - action.payload,
    reset: () => 0,
  },
});

export const { increment, decrement, reset } = cartCountSlice.actions;
export default cartCountSlice.reducer;
