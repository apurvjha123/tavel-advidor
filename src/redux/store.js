import {configureStore} from "@reduxjs/toolkit"
import apiSlice from "./slice/apiSlice"
export const store = configureStore({
    reducer:{
        api : apiSlice,
    }
})