import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cartCountReducer from "./cartCountSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartCount: cartCountReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
