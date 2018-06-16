import React, { Component } from "react";

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
                <a className="btn btn-lg btn-info mr-2" href="/Register">
               Sign Up
                </a>
                <a className="btn btn-lg btn-light" href="/Login">
              Login
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
