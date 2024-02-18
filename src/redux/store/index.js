import {configureStore} from '@reduxjs/toolkit'
import todoSlice from '../slice/todoSlice'
import counterSlice from '../slice/counterSlice'
import fetchSlice from '../slice/fetchSlice'
  let store=configureStore({
    //big reducer
    reducer:{
        //microreducer(slice)
        todo:todoSlice.reducer,
        counter:counterSlice,
        fetch:fetchSlice
        
    },
    devTools:process.env.DEV?true:false
})

export default store