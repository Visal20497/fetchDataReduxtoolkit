import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/slice/fetchSlice'

function FetchData() {
    let data=useSelector((item)=>{
        return item.fetch
    })
    console.log('data fetch',data)
    let dispatch=useDispatch()
    useEffect(()=>{
           dispatch(getData()) 
    },[])
  return (
    <div>FetchData</div>
  )
}

export default FetchData