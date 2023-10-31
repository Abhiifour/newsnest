import { configureStore,combineReducers } from "@reduxjs/toolkit" ;
import categorySlice from "./categorySlice";


const rootReducer = combineReducers({ 
    categorySlice,
       
  })


export const store = configureStore({
    reducer:rootReducer,
   
})