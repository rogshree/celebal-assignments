import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
const Navbar = ()=> {
  return (
    <>
    <div className='Navbar'>
    <NavLink  to='/'><AiFillHome color="green" fontSize="25px"/></NavLink>
    <NavLink to='/cart'><FaShoppingCart color="orange" fontSize="25px"/></NavLink>
    </div>
    </>
  )
}

export default Navbar