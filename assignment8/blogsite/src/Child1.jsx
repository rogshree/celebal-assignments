import React, { useContext } from 'react'
import { poper } from './App'
function Child1() {
    const {state,setState}= useContext(poper)
    const setting =()=>{
        const helper = {galti:"hogi",maihbhi:"insaan"}
        setState([...state,helper])
    }
  return (
    <div>
        <div>
                <button onClick={setting}>kardo</button>
        </div>
    </div>
  )
}

export default Child1