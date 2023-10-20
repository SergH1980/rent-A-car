import { createSlice } from "@reduxjs/toolkit";
import { getCars, loadMoreCars } from "./operations";

const initialState = {
  carList: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carList = action.payload || [];
      })
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loadMoreCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carList = [...state.carList.concat(action.payload)];
      })
      .addCase(loadMoreCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadMoreCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const carsReducer = carsSlice.reducer;
