import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

import { loadCartFromLocalStorage, saveCartToLocalStorage } from "../components/utilities/LocalStoreCartManagment";
interface CartState {
  products: Product[];
  count: number;
}

const initialState: CartState = {
  products: loadCartFromLocalStorage(),
  count: Number(localStorage.getItem("cartCount")) || 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const productToAdd = action.payload;
      const existingProduct = state.products.find((item: Product) => item.id === productToAdd.id);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.products.push({ ...productToAdd, quantity: 1 });
      }

      state.count++; // Increment the cart count
      saveCartToLocalStorage(state.products, state.count);
    },
    removeFromCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
      const { product, quantity } = action.payload;
      const productToRemove = product;
      const quantityToRemove = Math.max(0, quantity);

      state.products = state.products.map((item: Product) => {
        if (item.id === productToRemove.id) {
          const newQuantity = item.quantity - quantityToRemove;
          if (newQuantity > 0) {
            return { ...item, quantity: newQuantity };
          } else {
            return null;
          }
        }
        return item;
      }).filter(Boolean) as Product[];

      state.count--; // Decrement the cart count
      saveCartToLocalStorage(state.products, state.count);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
