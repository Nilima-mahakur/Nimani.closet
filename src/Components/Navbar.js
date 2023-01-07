import React from 'react'
import './Navbar.css'
import {FaCartPlus , FaSearch } from "react-icons/fa";


const Navbar = (props) => {
  return (
    <div className='nav cart'>
        <div className='navbar' onClick={()=> props.handleshow(false)}>Nimani.closet</div>
        <div className='navbarcenter'>
        <div className='searchbar'>
          <FaSearch className='searchicon'/>
          <input type="text" placeholder='Search for items, brands and more...' className='searchinput' />
        </div>
      </div>
      <div className='home' onClick={()=> props.handleshow(false)}>
       Home
      </div>
      <div onClick={()=> props.handleshow(true)}>
        <FaCartPlus className='icon'/>
        <sup className='count'>{props.count}</sup>
      </div>
    </div>
  )
}

export default Navbar
