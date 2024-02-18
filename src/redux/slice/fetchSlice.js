import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

let initialState={
    loading:false,
    data:[],
    error:''
}
export let getData= createAsyncThunk('fetch/getData',async()=>{
     try{
        let res= await fetch('https://jsonplaceholder.typicode.com/posts')
        let data= await res.json()
        return data
     }
     catch(err)
     {
        throw err
     }
})

//slice
let fetchSlice=createSlice({
    name:"fetch",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
     builder.addCase(getData.pending,(state)=>{
        state.loading=true
     }).addCase(getData.fulfilled,(state,action)=>{
          state.loading=false
          state.data=action.payload
     }).addCase(getData.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload
     })
    }

})
export default fetchSlice.reducer