import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../reducers/carsReducer";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
