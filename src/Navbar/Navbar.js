import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
   
  return (
    <nav>
        <div className='logo'>
            <span className='Logo'>SUPRIYA <br></br>TECHNOLOGY</span>
          
        </div>
        <div className='navlist'>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/Contact">CONTACT</Link></li>
                <li><Link to="/About">ABOUT</Link></li>
                <li><Link to="/services">SERVICES</Link></li>
                
            </ul>

        </div>
        <div className="ham" > <button > HAM
        </button></div>
        
    </nav>
  )
}

export default Navbar
