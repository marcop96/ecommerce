import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Product[],
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const productToAdd = action.payload;
      const existingProduct = state.find((item:Product) => item.id === productToAdd.id);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        return [...state, { ...productToAdd, quantity: 1 }];
      }
    },

    removeFromCart: (state, action: PayloadAction<{ product: Product, quantity: number }>) => {
      const { product, quantity } = action.payload;
      
      const productToRemove = product;
    
      // Ensure quantity is a positive number
      const quantityToRemove = Math.max(0, quantity);
    
      const updatedState = state.map((item: Product) => {
        if (item.id === productToRemove.id) {
          const newQuantity = item.quantity - quantityToRemove;
    
          if (newQuantity > 0) {
            return { ...item, quantity: newQuantity };
          } else {
            // If the new quantity is 0 or negative, remove the product
            return null;
          }
        }
        return item;
      }).filter(Boolean) as Product[];
    
      return updatedState;
    }
    ,
    calculateTotalPrice: (state,action:PayloadAction<Product>) =>{
      console.log(state)
      console.log(action)
    }
  },
});

export const { addToCart, removeFromCart,calculateTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;
