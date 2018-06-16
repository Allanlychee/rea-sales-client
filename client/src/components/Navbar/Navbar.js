import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
        <Fragment>
          <a className="navbar-brand" href="landing.html">
            ARIES AND FRIENDS
          </a>
          </Fragment>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link">
                  {" "}
                  <Link to='/'>Home</Link>
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link">
                <Link to='/Register'>Register</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to='/Login'>Login</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
