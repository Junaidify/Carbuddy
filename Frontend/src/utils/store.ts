import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../reducers/carsReducer";
import wishlistReducer from "../reducers/wishlistReducer";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    wishlist: wishlistReducer
  },
});


export type RootState = ReturnType<typeof store.getState>