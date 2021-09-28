import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllCounties = createAsyncThunk('countries/fetchAll', async () => {
    const res = await axios(`https://disease.sh/v3/covid-19/countries`);
    return res.data;
})

export const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        items: [],
        isLoading: false    
    },
    reducers: {},
    extraReducers: {
        [fetchAllCounties.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [fetchAllCounties.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchAllCounties.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = state.error.message;
        },
    },
});

export default countriesSlice.reducer;