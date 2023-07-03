import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetechApi = createAsyncThunk("fetechApi", async () => {
    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
        params: {
          bl_latitude: '11.847676',
          tr_latitude: '12.838442',
          bl_longitude: '109.095887',
          tr_longitude: '109.149359'
        },
        headers: {
          'X-RapidAPI-Key': 'b269647767mshac33e317e6cfa36p1094cajsnab82f069114c',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };
    
      const response = await axios.request(options);
      return response.json();
})

const apiSlice = createSlice({
    name: "api",
    initialState: {
        isLoading: false,
        data: null
    },
    extraReducers: (builder)=>{
        builder.addCase(fetechApi.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetechApi.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
    }
})

export default apiSlice.reducer;