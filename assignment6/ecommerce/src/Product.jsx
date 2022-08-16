import React from 'react'
// import { useEffect } from 'react'
const Product = (props)=> {
  const data = props.productusers;
  // useEffect(()=>{
  //   console.log(props.cartdata)
  // },[props.cartdata]);
  return (
    <>
    <div className='products'>
      <h1 className='heading'>Products</h1>
      {
        data.map((curElem)=>{
          return(
            <div className="card" key={curElem.id}>
              <img src={curElem.image} alt={curElem.id} />
              <div className="carddata">
                <div>
                  <h2>{curElem.title}</h2>
                  </div>
                  <div className="pricetag">
                    <h3>Price: {curElem.price}$</h3>
                  </div>
                  <div>
                    <button onClick={()=>{props.setCartdata([...props.cartdata,curElem]);
                    alert("Item added to cart")}}>Add to cart</button>
                    </div>
                    <div className='description'>
                      <p>{curElem.description}</p>
                      </div>
              </div>
              </div>
          );
        })
      }
    </div>
    
    </>
  );
}

export default Product