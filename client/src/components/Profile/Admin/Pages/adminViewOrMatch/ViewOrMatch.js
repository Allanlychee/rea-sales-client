import React, { Component } from "react";
import './ViewOrMatch.css'
import '../adminHome/admin.css'
import API from "../../../Admin/Utils/adminAddSeller/API"

class viewMatch extends Component {
  state = {
    homes: [],
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    formatted_Addr: "",
    price: "",
    description: ""
  };

  componentDidMount() {
    this.loadHomes();
  }

  loadHomes = () => {
    API.getHomes()
      .then(res =>
        this.setState({ homes: res.data, name: "", address: "", city: "", state: "", zip: "", formatted_Addr: "", price: "", description: "" })
      )
      .catch(err => console.log(err));
  };
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
        <div className="viewMatchContainer fluid">
          <div className="row">
            <div className="col-m5">
              {/* <!--  Content  --> */}
              {/* USER PROFILE FROM MONGODB GOES IN THIS CONTAINER*/}

              <div className="profile-box">
                <h2 className="viewMatchHeaders">Homeowners</h2>
                <span className="homeList">
                  {this.state.homes.length ? (
                    <ul>

                      {this.state.homes.map(Home => (
                        <a>
                          <button className="homeListItems btn btn-dark">
                            <li key={Home._id}>
                              Name: {Home.name}
                              <br />
                              Address: {Home.address} {Home.city}, {Home.state} {Home.zip}
                              <br />
                              Price: {Home.price}
                              <br />
                              Description: {Home.description}
                              <hr />
                            </li>
                          </button>
                        </a>
                      ))}
                    </ul>
                  ) : (
                      <h3 className="text-center">No Results to Display</h3>
                    )}
                </span>
              </div>
            </div>

            <div className="col-m2">
              <div className="btn btn-primary matchBTN">Match
              </div>
            </div>
            <div className="col-m5">
              {/* MATCHING BUYERS GO IN THIS CONTAINER*/}
              <div className=" buyer-box">
                <h2 className="viewMatchHeaders">Buyers</h2>
                <ul>
                  <button className="buyer-match btn btn-dark">
                    <li>Name:  Gal Gadot
                        <br />
                      Income Range:  $150,000+
                        <br />
                      Letter of Approval:  Yes
                        <br />
                      Financing Completd:  Yes
                        <br />
                      Amount Financed:  $20,000,000
                        <hr />
                    </li>
                  </button>
                  <button className="buyer-match btn btn-dark">
                    <li>Name:  Mark Zuckerberg
                        <br />
                      Income Range:  $550,000+
                        <br />
                      Letter of Approval:  Yes
                        <br />
                      Financing Completd:  Yes
                        <br />
                      Amount Financed:  $20,000,000
                        <hr />
                    </li>
                  </button>
                  <button className="buyer-match btn btn-dark">
                    <li>Name:  Sara Croft
                        <br />
                      Income Range:  $750,000+
                        <br />
                      Letter of Approval:  Yes
                        <br />
                      Financing Completd:  Yes
                        <br />
                      Amount Financed:  $50,000,000
                        <hr />
                    </li>
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* <!--  Video is muted & autoplays, placed after major DOM elements for performance & has an image fallback  --> */}
        <video autoplay="true" loop id="video-background" muted plays-inline>
          <source src="https://static.videezy.com/system/resources/previews/000/007/790/original/4K_UHD_Drone_Bellingham_Washington_Neighborhood_Reavealing__Fernando.mp4" type="video/mp4" />
        </video>
      </div >
    )
  }
}

export default viewMatch;