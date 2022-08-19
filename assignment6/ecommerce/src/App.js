import React,{useState,useEffect,createContext} from 'react'
import Navbar from "./Navbar";
import { Route, Routes } from 'react-router-dom';
import Product from "./Product";
import Cart from "./Cart";
import Error from "./Error"
export const poper = createContext();
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
    <poper.Provider value={{cartdata,setCartdata}}>
    <Navbar/>
    <Routes>
            <Route exact path="/" element={<Product productusers={users}/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route element={<Error/>} />
    </Routes>
    </poper.Provider>
    </>
  );
}

export default App;
