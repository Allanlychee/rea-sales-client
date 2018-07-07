import React, { Component } from "react";
import './ViewOrMatch.css'
import '../adminHome/admin.css'
import { Col, Row, Container } from "../../../../Grid";

class viewMatch extends Component {
  render() {
    return (
      <div id="viewMatch">
        <div className="landing">
          <div className="landing-inner">
            <ul className="nav nav-tabs nav-fill adminNav">
              <li className="nav-item">
                <a className="nav-link adminNavlink" href="/Admin">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link adminNavlink" href="/Admin/View-Match">Match Clients</a>
              </li>
              <li className="nav-item">
                <a className="nav-link adminNavlink" href="/Admin/addhome">Homes for Sale</a>
              </li>
              <li className="nav-item">
                <a className="nav-link adminNavlink" href="#">View Buyers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link adminNavlink" href="#">View Closed Deals</a>
              </li>
            </ul>
          </div>
        </div>
        <h1>Matchmaking<br /> </h1>
        <div className="viewMatchContainer">
          <div className="row">
            <div className="col-m6">
              {/* <!--  Content  --> */}
              {/* USER PROFILE FROM MONGODB GOES IN THIS CONTAINER*/}
              <div className="profile-box">
                <h2>Homeowners</h2>
              </div>
            </div>
            <div className="col-m6">
              {/* MATCHING BUYERS GO IN THIS CONTAINER*/}
              <div className=" buyer-box">
                <h2>Buyers</h2>
              </div>
            </div>
          </div>
        </div>


        {/* <!--  Video is muted & autoplays, placed after major DOM elements for performance & has an image fallback  --> */}
        <video autoplay="true" loop id="video-background" muted plays-inline>
          <source src="https://static.videezy.com/system/resources/previews/000/007/790/original/4K_UHD_Drone_Bellingham_Washington_Neighborhood_Reavealing__Fernando.mp4" type="video/mp4" />
        </video>
      </div>
    )
  }
}

export default viewMatch;