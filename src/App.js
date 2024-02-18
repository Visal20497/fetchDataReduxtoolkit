 import React from 'react'
import Immer from './component/Immer'
import Todo from './component/todo'
import Counter from './component/Counter'
import FetchData from './component/FetchData'
 
 function App() {

   return (
      <>
      {/* <Immer/> */}
      <FetchData/>
      <Counter/>
      <hr/>
      <Todo/>
      </>
   )
 }
 
 export default App