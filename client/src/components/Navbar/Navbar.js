import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = props => (
  <nav>
    <div className='nav-wrapper blue darken-4' >
      <a className='brand-logo'>Real Estate {props.statusMessage}</a>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li><Link to='/'>Main</Link></li>
        <li><Link to='/info'>Info</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  </nav>
)

export default Navbar;