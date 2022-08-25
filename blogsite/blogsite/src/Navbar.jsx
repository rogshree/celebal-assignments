import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = ()=> {
  return (
    <>
    <div className='Navbar'>
    <NavLink  to='/'>Home</NavLink>
    <NavLink to='/signup'>SignUp</NavLink>
    <NavLink to='/login'>Login</NavLink>
    <NavLink to='/myblogs'>MyBlogs</NavLink>
    <NavLink to='/blogs'>Blogs</NavLink>
    <NavLink to='/logout'>Logout</NavLink>
    </div>
    </>
  )
}

export default Navbar