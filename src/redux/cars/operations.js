import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../utils/axiosInstance';

export const getCars = createAsyncThunk('getCars', async (limit, thunkAPI) => {
  try {
    const response = await instance.get(`/cars/?page=1&limit=${limit}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const loadMoreCars = createAsyncThunk(
  'loadMoreCars',
  async (page, thunkAPI) => {
    try {
      const response = await instance.get(`/cars/?page=${page}&limit=8`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getAllCars = createAsyncThunk(
  'getAllCars',
  async ({ brand, price }, thunkAPI) => {
    try {
      let filteredCars = [];
      const response = await instance.get(`/cars/`);
      if (brand === '' && price === '') {
        return;
      }
      filteredCars = response.data
        .filter(item => {
          if (brand !== '') {
            return item.make === brand;
          }
          return response.data;
        })
        .filter(item => {
          if (price !== '') {
            const providedPrice = Number(item.rentalPrice.substring(1));
            return providedPrice < Number(price);
          }

          return response.data;
        });
      return filteredCars;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
