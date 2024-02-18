import { createSlice } from "@reduxjs/toolkit";

let todoSlice = createSlice({
    name:"todo",
    initialState:{text:'',todo:[],edit:''},
    reducers:{
        addText(state,action){
            state.text=action.payload
        },
        submitText(state,action){
            let obj={id:Math.trunc(Math.random()*1000),text:state.text}
            state.todo=[...state.todo,obj]
            state.text=''
        },
        deleteText(state,action){
            let newData=state.todo.filter((item)=>{
                return item.id !== action.payload
            })
            state.todo=newData
        },
        editText(state,action){}
    }
})
export let {addText,submitText,deleteText,editText}=todoSlice.actions
 
export default todoSlice 