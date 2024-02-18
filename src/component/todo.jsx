import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addText, deleteText, submitText } from '../redux/slice/todoSlice'

function Todo() {
    console.log(process.env.DEV)
   let data= useSelector((item)=>{
        return item.todo
    })
   let dispatch= useDispatch()
    //this is for setting text
    function setInputText(e)
    {
       dispatch(addText(e.target.value))
    }
    console.log('here is my data',data)
  return (
    <>
    <input type='text' placeholder='enter your text'  value={data.text}  onChange={setInputText}/>
    <button onClick={()=>{
        dispatch(submitText())
    }}>add</button>
    <hr/>
    {data.todo?.map((item)=>{
        return <div style={{margin:"5px",border:"1px solid black"}}>{item.text}
        <div>
            <button>edit</button>
            <button onClick={()=>{
                dispatch(deleteText(item.id))
            }}>delete</button>
        </div>
        </div>
    })}
    </>
  )
}

export default Todo