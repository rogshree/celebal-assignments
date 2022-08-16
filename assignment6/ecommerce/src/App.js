import React,{useState,useEffect} from 'react'
import Navbar from "./Navbar";
import { Route, Routes } from 'react-router-dom';
import Product from "./Product";
import Cart from "./Cart";
import Error from "./Error"
function App () {
  const [users,setUsers] = useState([]);
  const [cartdata,setCartdata] = useState([]);
  const getdata = async ()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    setUsers(await response.json());
  }
    useEffect(()=>{
      getdata();
    },[]);
  return (
    <>
    <Navbar/>
    <Routes>
            <Route exact path="/" element={<Product productusers={users} setCartdata={setCartdata} cartdata={cartdata}/>}/>
            <Route exact path="/cart" element={<Cart cartdata={cartdata}/>}/>
            <Route element={<Error/>} />
    </Routes>
    </>
  );
}

export default App;
