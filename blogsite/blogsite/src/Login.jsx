import axios from 'axios';
import React from 'react';
// import Cookies from 'universal-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const userlogin =async (e)=>{
        e.preventDefault();
        try{const res = await axios({
            method: 'post',
            url: '/signin',
            data: {
             email,password
            }
          });
        if(res.status===400)
        {
            window.alert("pls fill the data correctly");
        }
        else if(res.status===422)
        {
            window.alert("Invalid Credentials");
        }
        else{
            console.log(res.data);
            window.alert("Welcome back")
            navigate('/myblogs');
        }
}catch(error){
    console.log(error);
}
    }
  return (
    <form method='POST'>
    <br/>
    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required="" />
    <br/>
    <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required="" />
    <br/>
    <input type="submit" name="signin" value="login" onClick={userlogin}/>
</form>
  );
}

export default Login