import React, { Component } from "react";

class Admin extends Component {
  render() {
    return (
      <div>
        <p> Hello this is the ADMIN's page.</p>


        <p> <b>($100/Month) ADMIN to BUYER Interaction: </b> </p>
        <p> For $100 a month, the ADMIN pledges to find X amount of potential homes a month with your preference</p>
        <ol>
          <li> ADMIN receives HOUSE PREFERENCE from the BUYER </li>
          <li> ADMIN is able to find list of potential houses off/on the market based on #BEDROOM #BATH along with their Phone Number
            <p> Using MLS? API with search? Geotargetting?</p>
            <p> <b> Dialog: </b> "Hello, I am calling from... and we have someone that is interested in buying your house."</p>
          </li>
          <li> Once ADMIN finds a potential SELLER, Admin can store the SELLER'S information
          <ul>
              <li> Images found from API </li>
              <li> Address </li>
              <li> Description </li>
              <li> Price </li>
            </ul>
          </li>
          <li> ADMIN then sends the seller information to BUYER through the app (USING CRUD ON THE BACKEND) </li>
          <li> If BUYER is interested in a specific seller, then the dating begins.</li>
        </ol>

        <p> <b>($1500/Month) ADMIN to REAL-ESTATE REPRESENTATIVE Interaction: </b> </p>
      <p> For $1,500 a month, the ADMIN pledges to </p>



      </div>
    )
  }
}

export default Admin;