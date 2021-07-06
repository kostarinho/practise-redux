import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { gifsEndpoint } from '../../endpoints';
import axios from 'axios';


const initialState = {
  search: "",
  results: []
}

export const searchAsync = createAsyncThunk(
  'search/action',
  async (search) => {
    const results = await axios(gifsEndpoint,
      {
        params: {
          api_key: "nr9hXlgH98yPLK9kLxZZMWhmi4YnHsPc",
          limit: 12,
          q: search

        }
      });

    return results?.data?.data;
  }
);

export const counterSlice = createSlice({

  name: "searchThunk",

  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(
        searchAsync.fulfilled, (state, action) => {
          state.results = action.payload;
        }
      )
  },
});

export const { searchThunk } = counterSlice.actions;

export const searchThunks = (state) => state?.searchAsync?.results;

export default counterSlice.reducer;
