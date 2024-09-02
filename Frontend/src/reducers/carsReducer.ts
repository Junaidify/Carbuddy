import { createSlice } from "@reduxjs/toolkit";
import { InitialStatePropTypes } from "../constant/interfaces";

const initialState: InitialStatePropTypes = {
  isLoading: false,
  isError: false,
  cars: [],
}

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setLoading: (state): void => {
      state.isLoading = true;
    },
    setError: (state): void => {
      state.isLoading = false;
      state.isError = true;
    },
    setCars: (state, action): void => {
      state.isLoading = false;
      state.isError = false;
      state.cars = action.payload;
    },
  },
});

export const { setError, setLoading, setCars } = carSlice.actions;
export default carSlice.reducer;
