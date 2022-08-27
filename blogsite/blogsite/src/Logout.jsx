import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Logout() {
    const navigate = useNavigate();
    const log_out = async ()=>{
       await axios.get('http://localhost:5000/loggingout',{withCredentials:"include"}).then((res)=>{
        if(res.status===200)
        {
            navigate('/login');
            window.alert("User successfully logged out");

        }
        else if(res.status===401){
            navigate('/login');
        }
       }).catch((error)=>{
        navigate('/login');
        console.log(error)
       })
    }
    useEffect(()=>{
        log_out();
    },[])
  return (
    <div>Logout</div>
  )
}

export default Logout