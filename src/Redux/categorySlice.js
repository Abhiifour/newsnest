import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice({
    name: "categorySlice",
    initialState: {
      category: '',
    },
    reducers: {
      changeCategory: (state, action) => {
        const cat = action.payload;
        state.category = cat;
       
      },
    
      
    },
  });
  
  export default categorySlice.reducer;
  
  export const { changeCategory } = categorySlice.actions;
  