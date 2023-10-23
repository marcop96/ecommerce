import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Product[],
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const productToAdd = action.payload;
      const existingProduct = state.find((item) => item.id === productToAdd.id);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        return [...state, { ...productToAdd, quantity: 1 }];
      }
    },

    removeFromCart: (state, action: PayloadAction<Product>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
