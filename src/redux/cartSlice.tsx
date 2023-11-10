import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

function saveCartToLocalStorage(cart: Product[]) {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCart);
  } catch (err) {
    console.log(err);
  }
}

export function loadCartFromLocalStorage ()  {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart) as Product[];
  }
  return [];
}

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(),
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const productToAdd = action.payload;
      const existingProduct = state.find((item: Product) => item.id === productToAdd.id);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.push({ ...productToAdd, quantity: 1 });
      }
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action: PayloadAction<{ product: Product, quantity: number }>) => {
      const { product, quantity } = action.payload;
      const productToRemove = product;
      const quantityToRemove = Math.max(0, quantity);

      const updatedState = state.map((item: Product) => {
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

      saveCartToLocalStorage(updatedState);
      return updatedState;
    },
    
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
