import { createSlice } from "@reduxjs/toolkit";

const cartCountSlice = createSlice({
  name: "cartCount",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state,action) => state - action.payload,

  },
});

export const { increment, decrement } = cartCountSlice.actions;
export default cartCountSlice.reducer;
