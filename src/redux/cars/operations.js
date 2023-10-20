import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../utils/axiosInstance";

export const getCars = createAsyncThunk("getCars", async (limit, thunkAPI) => {
  try {
    const response = await instance.get(`/cars/?page=1&limit=${limit}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const loadMoreCars = createAsyncThunk(
  "loadMoreCars",
  async (page, thunkAPI) => {
    try {
      const response = await instance.get(`/cars/?page=${page}&limit=8`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
