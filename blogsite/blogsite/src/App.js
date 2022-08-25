import React  from 'react'
import Navbar from "./Navbar";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Myblogs from "./Myblogs";
import Blogs from "./Blogs";
import Logout from "./Logout";
import Error from "./Error";
function App () {
  return (
    <>
    <Navbar/>
    <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/myblogs" element={<Myblogs />}/>
            <Route exact path="/blogs" element={<Blogs/>}/>
            <Route exact path="/logout" element={<Logout/>}/>
            <Route element={<Error/>} />
    </Routes>
    </>
  );
}

export default App;
