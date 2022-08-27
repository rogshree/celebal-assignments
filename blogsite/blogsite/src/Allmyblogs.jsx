import axios from 'axios';
import React, { useState } from 'react'

function Allmyblogs() {
    const [mycontent,setMycontent] = useState({})
    const [hash,setHash] = useState(false);
    const allblogs = async()=>{
            await axios.get('/myblogsdata').then((res)=>{
            if(res.status === 200)
            {
                setMycontent(res.data);
                setHash(true);
            }
        }).catch((error)=>{
            if(error.response.status===401)
         {
             console.log("not working");
         }
        else{
                console.log(error);
                
            }
        })
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