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
        const data = {email,password};

        await axios.post('http://localhost:5000/signin',data,{withCredentials:"include"}).then(res=>{
            window.alert(`Welcome back`);
            navigate('/myblogs');
            }).catch(error=>{
                    if(error.response.status === 400)
            {
                window.alert("pls fill the data correctly");
            } 
                    else if(error.response.status===422)
        {
            window.alert("Invalid Credentials");
        }
    else
            {console.log(error);}
})
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