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
        </div>
      </nav>
    );
  }
}
