import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Cart = (props)=> {
  const [total,setTotal] = useState(0);
  const totalcal = ()=>{
    let increment=0;
    props.cartdata.map((el)=>{
    return increment+=Number(el.price)
    })
    setTotal(increment);
  }
  useEffect(()=>{
    totalcal()
  },[props.cartdata])
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
            </tr>
          {
            props.cartdata.map((ele)=>{
              return<tr className='cartprod'>
                <td className='namer'>{ele.title}</td>
                <td>{ele.price}$</td>
              </tr>
            })
          }
          
  <tr>
    <td><h2 className='cartprod namer'>Total :- </h2></td>
    <td><h2>{total.toFixed(2)}</h2></td>
  </tr>
  </table>
    </div>
    </>
  )
}

export default Cart