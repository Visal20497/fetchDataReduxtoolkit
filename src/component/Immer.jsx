import React from 'react'
import {produce} from 'immer'
function Immer() {
    let arr=[{name:'utsav',isActive:false,add:{pa:'delhi',ca:'blr'}},{name:'sidhu'}]
    // let newarr=arr.push('test')
    // console.log('actual arr',arr)
    // console.log('newArr',newarr)
    // console.log(arr==newarr)
    //  let newUpdateData=[{...arr[0],add:{...arr[0].add,ca:"abc"}}]
    //  console.log(newUpdateData)
    //  console.log(arr)
    let newData=produce(arr,(draft)=>{
              draft[0].add.ca='japan'
    })
    console.log(newData)
    console.log(arr)
  return (
    <div>Immer</div>
  )
}

export default Immer