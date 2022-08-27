import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const [check,setCheck] = useState(false);
  const [userinfo,setUserinfo] = useState({});
  const getuserinfo = async ()=>{
    await axios.get('http://localhost:5000/myblogsdata',{withCredentials:"include"}).then((res)=>{
    setUserinfo(res.data);
    setCheck(true);
   }).catch((error)=>{
   setTimeout(()=>{
      window.alert("Sign in Please");
    },3000)
    console.log(error);
 })
}
const blogsection=()=>{
  navigate('/myblogs');
}
const blogspage=()=>{
  navigate('/blogs');
}
  useEffect(()=>{
    getuserinfo();
  },[])
  return (
    <>
    {(check)?
    <div method='GET'>
      <h2>Welcome back {userinfo.name}</h2>
      <button onClick={blogsection}>Write a blog</button>
      </div>:
      <div>
        <h2>You can buy attention here</h2>
        <br/>
        <button onClick={blogspage}>Blogs</button>
        </div>}
    </>
  );
}

export default Home