import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decHandler, incHandler } from '../redux/slice/counterSlice'

function Counter() {
  let  {inc=1,dec=8}=  useSelector((item)=>{
        return item.counter
    })
  //dispatch
  let dispatch=useDispatch()
  return (
     <>
     <h1>inc:{inc}</h1>
     <h1>dec:{dec}</h1>
     <button onClick={()=>{
        dispatch(incHandler(20))
     }}>inc</button>
     <button onClick={()=>{
        dispatch(decHandler())
     }}>dec</button>
     </>
  )
}

export default Counter