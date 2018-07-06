import React, { Component } from "react";
import './ViewOrMatch.css'

class viewMatch extends Component {
    render() {
      return (
        <div id="seller">
            <h1>Matchmaking<br /> </h1>
          {/* <!--  Content  --> */}
         
  
            <span>
              {/* USER PROFILE FROM MONGODB GOES IN THIS CONTAINER*/}
              <div className="profile-container">
                <h2>Homeowners</h2>
              </div>
  
              {/* MATCHING BUYERS GO IN THIS CONTAINER*/}
              <div className="buyermatch-container">
                <h2>Buyers</h2>
              </div>
            </span>
       
  
          {/* <!--  Video is muted & autoplays, placed after major DOM elements for performance & has an image fallback  --> */}
          <video autoplay="true" loop id="video-background" muted plays-inline>
            <source src="https://static.videezy.com/system/resources/previews/000/007/790/original/4K_UHD_Drone_Bellingham_Washington_Neighborhood_Reavealing__Fernando.mp4" type="video/mp4" />
          </video>
        </div>
      )
    }
  }
  
  export default viewMatch;