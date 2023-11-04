import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cartCountReducer from "./cartCountSlice";
import drawerReducer from "./drawerSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartCount: cartCountReducer,
    drawer: drawerReducer,

  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
