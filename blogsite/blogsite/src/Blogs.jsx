import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function Blogs() {
const [allblogs,setAllblogs] = useState([]);
  const Getalldata = async()=>{
    try{ const res = await axios("/theblogs")
     setAllblogs(res.data);
    }catch(error)
    {
     console.log(error);
         throw error;
    }
 }
 useEffect(()=>{
  Getalldata();
 },[])
  return (
    <div method='GET'>
    {
    allblogs.map((ele)=>{
    return (
      (ele.messages)?
      ele.messages.map((innerele)=>{
        return(
          <div key={innerele._id}>
       <h2>{innerele.blogtitle}</h2>
       <br/>
       <p>{innerele.blogcontent}</p>
    </div>
        )
      }):<br/>
    
    );
}
)}
</div>
  );
}

export default Blogs