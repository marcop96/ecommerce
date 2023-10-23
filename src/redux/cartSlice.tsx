import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Product[],
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      return [...state, action.payload];
    },

    removeFromCart: (state, action: PayloadAction<Product>) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
