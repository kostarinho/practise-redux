import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    search: ""
}

export const Loader = createSlice({
    name: 'Loader',
    initialState,
    reducers: {
        updateSearch: (state, { payload }) => {
            state.search = payload;
        }
    },
});

export const { updateSearch } = Loader.actions;
export const selectSearch = (state) => state?.Loader?.search;
export default Loader.reducer;