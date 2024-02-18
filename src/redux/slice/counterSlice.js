import { createSlice } from "@reduxjs/toolkit";

let countSlice=createSlice({
    name:'counter',
    initialState:{inc:1,dec:10},
    reducers:{
        incHandler(state,action){
            state.inc=state.inc+action.payload
        },
        decHandler(state,action){
            state.dec=state.dec-1
        }
    }
})
export let {incHandler,decHandler}=countSlice.actions
export default countSlice.reducer