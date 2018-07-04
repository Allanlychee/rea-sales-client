import React, { Component, Fragment } from "react";
import './Navbar.css'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
      
            <a className="navbar-brand" href='/'>
              <img className="customlogo" src="https://cdn1.brivityidx.com/assets/images/uploads/1576/arevalohome_transparentlogo.png" alt="Arevalo Home" />
          </a>
         
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* <div className="collapse navbar-collapse" id="mobile-nav"> */}
            {/* <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                Home
                </a>
              </li>
            </ul> */}

            {/* <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/Register">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Login">
                  Login
                </a>
              </li>
            </ul> */}
          {/* </div> */}
        </div>
      </nav>
    );
  }
}
