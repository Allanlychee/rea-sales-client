import React, { Component } from "react";
import "./admin.css"

class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Admin Page <br /> </h1>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <ul class="nav nav-tabs nav-fill adminNav">
              <li class="nav-item">
                <a class="nav-link adminNavlink" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link adminNavlink" href="/Admin/View-Match">Match Clients</a>
              </li>
              <li class="nav-item">
                <a class="nav-link adminNavlink" href="/Admin/addhome">Homes for Sale</a>
              </li>
              <li class="nav-item">
                <a class="nav-link adminNavlink" href="#">View Buyers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link adminNavlink" href="#">View Closed Deals</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}

export default Admin;