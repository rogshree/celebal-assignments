import axios from 'axios';
import React, { useState } from 'react'

function Allmyblogs() {
    const [mycontent,setMycontent] = useState({})
    const [hash,setHash] = useState(false);
    const allblogs = async()=>{
        
        try{ const res = await axios('/myblogsdata');
         setMycontent(res.data)
         setHash(true);
         if(res.status===401)
         {
             console.log("not working");
         }
        }catch(error)
        {
         console.log(error);
         throw error;
        }
     }
  return (
    <div method='GET'>
        <button onClick={()=>allblogs()}>Refresh</button>
        <div>
        {
            (hash)?<div>
                {
                mycontent.messages.map((ele)=>{
                return (
                <div key={ele._id}>
                   <h2>{ele.blogtitle}</h2>
                   <p>{ele.blogcontent}</p>
                </div>
                );
            }
            )}
            </div>:<h2>Click refresh to view your Blogs</h2>
        }
       </div>
    </div>
  );
}

export default Allmyblogs