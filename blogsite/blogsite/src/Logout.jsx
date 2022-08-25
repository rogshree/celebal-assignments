import axios from 'axios';
import React from 'react';
// import Cookies from 'universal-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Logout() {
    const navigate = useNavigate();
    const log_out = async ()=>{
      try { const res = await axios('/loggingout');
        if(res.status===200)
        {
            // cookies.remove('jwttoken');
            navigate('/login');
            window.alert("User successfully logged out");

        }
        else if(res.status===401){
            // cookies.remove('jwttoken');
            navigate('/login');
        }
        else{
            // cookies.remove('jwttoken');
            navigate('/login');
        }
    }catch(error)
        {
            // cookies.remove('jwttoken');
            navigate('/login');
            console.log(error);
            throw error;
        }

    }
    useEffect(()=>{
        log_out();
    },[])
  return (
    <div>Logout</div>
  )
}

export default Logout