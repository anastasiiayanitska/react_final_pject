import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/utils";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/categories/all`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
