import React, { Component } from "react";
import './seller.css'


class Seller extends Component {
  render() {
    return (
      <div id="seller">

        <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />

        {/* <!--  Content  --> */}
        <article>

          <h1>SELLER PROFILE <br /> </h1>
          <span>
            {/* USER PROFILE FROM MONGODB GOES IN THIS CONTAINER*/}
            <div className="profile-container">
              <h2>Profile</h2>
            </div>

            {/* MATCHING BUYERS GO IN THIS CONTAINER*/}
            <div className="buyermatch-container">
              <h2>Buyer-Match</h2>
            </div>
          </span>
        </article>

        {/* <!--  Video is muted & autoplays, placed after major DOM elements for performance & has an image fallback  --> */}
        <video autoplay="true" loop id="video-background" muted plays-inline>
          <source src="https://static.videezy.com/system/resources/previews/000/007/790/original/4K_UHD_Drone_Bellingham_Washington_Neighborhood_Reavealing__Fernando.mp4" type="video/mp4" />
        </video>
      </div>
    )
  }
}

export default Seller;