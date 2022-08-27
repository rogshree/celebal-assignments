import React from 'react'
import { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
function Signup() {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        name:"",email:"",password:"",confirm:""
    });
    let name,value;
    const handleinput = (e)=>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
    }
    const submitdata = async(e)=>{
        e.preventDefault();
        await axios.post('/register',user).then((res)=>{
            if(res.status === 201)
            {window.alert("Registration successfulll");
            navigate('/login');}
        }).catch((error)=>{
            if(error.response.status === 400)
            {
                window.alert("Please enter details correctly");
            }
            else if(error.response.status === 422)
            {
                window.alert("user already exist");
            }
            else if(error.response.status === 423)
            {
                window.alert("Password not matched");
            }
            else if(error.response.status === 500)
            {
                window.alert("Server error try again later");
            }
            else{
                console.log(error);
            }
        })
            
    }
  return (
    <>
    <form method='POST'>
    <br/>
    <input type="name" name="name" value={user.name} onChange={handleinput} placeholder="Name" required=""/>
    <br/>
    <input type="email" name="email" value={user.email} onChange={handleinput} placeholder="Email" required="" />
    <br/>
    <input type="password" name="password" value={user.password} onChange={handleinput} placeholder="Password" required="" />
    <br/>
    <input type="password" name="confirm" value={user.confirm} onChange={handleinput} placeholder="Re-type Password" required=""/>
    <br/>
    <input type="submit" name="signup" value="register" onClick={submitdata}/>
</form>
</>
  );
}

export default Signup