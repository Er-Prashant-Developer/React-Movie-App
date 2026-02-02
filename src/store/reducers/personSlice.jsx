import { createSlice } from "@reduxjs/toolkit";

const initialState={
info:null
}

const personslice=createSlice({
  name:"person",
  initialState,
  reducers:{
    loadperson:(state,action)=>{
      state.info=action.payload
    },
    removeperson:(state,action)=>{
      state.info=null
    }
  }
})

export default personslice.reducer;
export const {loadperson,removeperson}=personslice.actions