import React from 'react'
import './Navbar.css'

const Navbar = props => (
    <nav>
      <div className="nav-wrapper deep-purple darken-2">
        <a href="#!" className="brand-logo">Placeholder Name & Logo</a>
        <ul className="right">
          <li><i className="material-icons statusMessage"> {props.statusMessage} </i></li>   
        </ul>
      </div>
    </nav>
  )
  
  export default Navbar;