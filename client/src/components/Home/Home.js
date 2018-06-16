import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">ARIES AND FRIENDS</h1>
                <p className="lead">
                  {" "}
                  TEXTTEXTEXTEXTEXT
                </p>
                <hr />
                <a className="btn btn-lg btn-info mr-2">
                <Link to='/Register'>Sign Up</Link>
                </a>
                <a className="btn btn-lg btn-light">
                <Link to='/Login'>Login</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
