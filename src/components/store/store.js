import { configureStore } from "@reduxjs/toolkit";
import storeSlice from './cartSlice'
import productSlice from "./productSlice";

const store=configureStore({
    reducer:{
        cart:storeSlice,
        products:productSlice
    }
})

export default store;