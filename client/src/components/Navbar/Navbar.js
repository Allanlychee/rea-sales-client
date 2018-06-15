import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = props => (
  <div className = 'navbar-fixed transparent'>
  <nav className='transparent'>
    <div className='nav-wrapper transparent'>
      <a className='brand-logo center'>Real Estate {props.statusMessage}</a>
      <ul id='nav-mobile' className='right hide-on-med-and-down transparent'>
        <li><Link to='/'>Main</Link></li>
        <li><Link to='/info'>Info</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/userReg'>userReg</Link></li>
      </ul>
    </div>
  </nav>
  </div>
)

export default Navbar;