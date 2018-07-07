import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="homeLanding">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4 homeTitle">Arevalo Home Partnership</h1>
                <hr />
                <br/>
                <p className="lead">
                  More than just a connection. It's a relationship.
                </p>
                <hr />
                <a className="btn btn-lg btn-info mr-2 registerBTN" href="/Register">
                  Sign Up
                </a>
                <a className="btn btn-lg btn-light loginBTN" href="/Login">
                  Login
                </a>
                <hr />
               
                  <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Page Views (For Devs Only)
                     </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="/Admin">Admin Page</a>
                      <a className="dropdown-item" href="/Representative">Representative Page</a>
                      <a className="dropdown-item" href="/Buyer">Buyer Page</a>
                      <a className="dropdown-item" href="/Seller">Seller Page</a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
