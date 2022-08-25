import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Allmyblogs from './Allmyblogs';

function Myblogs() {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({});
    const [blogtitle,setBlogtitle] = useState("");
    const [blogcontent,setBlogcontent] = useState("");
    const Getdata = async()=>{
      try{  const res = await axios('/myblogsdata')
        console.log(res);
        
          if(res.status===401)
        {
            setTimeout(()=>{
                window.alert("Unauthorized");
              },500)
              navigate('/login');
        }
        else{
        setUserdata(res.data)
        }
       }catch(error)
       {
        setTimeout(()=>{
          window.alert("Unauthorized");
        },500)
        navigate('/login');
        console.log(error);
       }
    }
    const submitcontent = async(e)=>{
        e.preventDefault();
        try{const res = await axios({
            method: 'post',
            url: '/blogsupload',
            data: {
             blogtitle,blogcontent
            }
          });
        if(res.status===201)
        {
            window.alert("Your Blog is Live now");
            setBlogtitle("");
            setBlogcontent("");
            navigate('/myblogs');
        }
        else if(res.status===400)
        {
            window.alert("Error in writing blog");
            navigate('/myblogs');
        }
        else{
           navigate('/myblogs');
        }
       }catch(error)
       {
        console.log(error);
       }
    }
    useEffect(()=>{
        Getdata();
    },[])
  return (
    <>
    <h1>New Blog:-</h1>
    <form method='GET'>
    <br/>
    <span>Name</span>
    <input type="name" name="name" value={userdata.name} placeholder="name" required="" />
    <br/>
    <span>Email</span>
    <input type="email" name="email" value={userdata.email} placeholder="Email" required="" />
    <br/>
    </form>
    <br/>
    <form method='POST'>
    <span>Title</span>
    <input type="title" name="blogtitle" onChange={(e)=>setBlogtitle(e.target.value)} value={blogtitle} placeholder="title" required=""/>
    <br/>
    <span><h4>New Blog</h4></span>
    <textarea type="blog" name="blogcontent" onChange={(e)=>setBlogcontent(e.target.value)} value={blogcontent} placeholder="Write here" required=""/>
    <br/>
    <input type="submit" name="signup" value="Upload" onClick={submitcontent}/>
    <br/>
    <br/>
</form>
<Allmyblogs/>
</>
  );
}

export default Myblogs