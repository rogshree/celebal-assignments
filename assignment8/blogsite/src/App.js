import React, { useEffect, useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import { createContext } from 'react'
export const poper = createContext();
function App() {
  const gett = {falguni:"bahu",dalchini:"sahu"}
  const[state,setState] = useState([gett])
  useEffect(()=>{
    console.log(state)
  },[state])
  return (
    <poper.Provider value={{state,setState}}>
      <Child1/>
      <Child2/>
    </poper.Provider>
  )
}

export default App