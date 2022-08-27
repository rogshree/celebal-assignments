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
      const element = ()=>{
        setTimeout(()=>{
          window.alert("Unauthorized");
        },500)
        navigate('/login');
      }
      await axios.get('http://localhost:5000/myblogsdata',{withCredentials:"include"}).then((res)=>{
        if(res.status===401)
        {
            element();
        }
        if(res.status===200)
        {
        setUserdata(res.data)
        }
      }).catch((error)=>{
        element();
        console.log(error);
      })
    }
    const submitcontent = async(e)=>{
        e.preventDefault();
        const data = { blogtitle,blogcontent };
        await axios.post('http://localhost:5000/blogsupload',data,{withCredentials:"include"}).then((res)=>{
            window.alert("Your Blog is Live now");
            setBlogtitle("");
            setBlogcontent("");
        }).catch((error)=>{
          if(error.response.status === 400)
          {
            window.alert("Error in writing blog");
            navigate('/myblogs');
          }
          else{
            console.log(error);
          }
          
        })
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