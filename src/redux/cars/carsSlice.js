import { createSlice } from '@reduxjs/toolkit';
import { getCars, loadMoreCars, getAllCars } from './operations';

const initialState = {
  filteredCars: [],
  carList: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.filteredCars = [];
        state.carList = action.payload || [];
      })
      .addCase(getCars.pending, state => {
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
      .addCase(loadMoreCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(loadMoreCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.filteredCars = action.payload || [];
        state.carList = action.payload || [];
      })
      .addCase(getAllCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const carsReducer = carsSlice.reducer;
