import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { poper } from './App'
const Cart = (props)=> {
  const [total,setTotal] = useState(0);
  const {cartdata,setCartdata} = useContext(poper);
  const totalcal = ()=>{
    let increment=0;
    cartdata.map((el)=>{
    return increment+=Number(el.price)
    })
    setTotal(increment);
  }
  const removefromcart = (ide)=>{
    const updatedlist = cartdata.filter((el)=>{
      return el.id !== ide
  })
  setCartdata(updatedlist)
  }
  useEffect(()=>{
    totalcal()
  },[cartdata])
  return (
    <>
    <div className='allitems'>
          <table>
            <tr>
              <th>
                <h2>Items</h2>
              </th>
              <th>
                <h2>Price</h2>
              </th>
              <th>.</th>
            </tr>
          {
            cartdata.map((ele)=>{
              return<tr className='cartprod' key={ele.id}>
                <td className='namer'>{ele.title}</td>
                <td>{ele.price}$</td>
                <td><button onClick={()=>removefromcart(ele.id)}>remove</button></td>
              </tr>
            })
          }
          
  <tr>
    <td><h2 className='cartprod namer'>Total :- </h2></td>
    <td><h2>{total.toFixed(2)}</h2></td>
    <td>.</td>
  </tr>
  </table>
    </div>
    </>
  )
}

export default Cart