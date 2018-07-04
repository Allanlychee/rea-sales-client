import React, { Component } from "react";
import "./buyer.css";
// import App from '../Tabs/index';

class Buyer extends Component {
  render() {
    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Oswald"
          rel="stylesheet"
          type="text/css"
        />
        <div className="container">
          {/* buyer profile card -- maybe make this it's own component since it can be made dynamic -- this will be a test */}
          <div className="empty-space" />

          <div className="row profile-card">
            <div className="col-sm-4" />
            <div className="col-sm-4 image-div">
              <div className="image-container">
                <img
                  src="https://chiyawriters.files.wordpress.com/2016/09/headshot-ronni-4-200x200.jpg?w=620"
                  className="img-circle"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="col-sm-4" />
            <div className="col-sm-12">
              <p>
                <h5>
                  Name: <span>Andy</span>
                </h5>
              </p>
              <p>
                <h5>
                  Sex: <span>Male</span>
                </h5>
              </p>
              <p>
                <h5>
                  Age: <span>30</span>
                </h5>
              </p>
              <p>
                <h5>
                  Profession: <span>Web Developer</span>
                </h5>
              </p>
              <p>
                <h5>
                  Marital Status: <span>Married</span>
                </h5>
              </p>
              <p>
                <h5>
                  Children: <span>2</span>
                </h5>
              </p>
              <p>
                <h5>
                  Yearly Income: <span>$150,000</span>
                </h5>
              </p>
              <p>
                <h5>
                  City of current residence: <span>Chino</span>
                </h5>
              </p>
            </div>
          </div>
          {/* profile card end */}

          {/* ======================================================== */}

          {/* tabs start */}
            <ul class="nav nav-tabs justify-content-center">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#criteria">
                  Criteria
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#sellermatches">
                  Seller Matches
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#chat">
                  Chat
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#favorites">
                  Favorites
                </a>
              </li>
            </ul>
          <div>

            <div class="tab-content">
              <div class="tab-pane active test-divs" id="criteria">
                <div className="row criteria">
                  <div className="col-sm-12">
                    <h1 className="text-center">Criteria</h1>
                    <p>
                      <h5>
                        Price: <span>$465,000</span>
                      </h5>
                    </p>
                    <p>
                      <h5>
                        Location: <span>Orange County</span>
                      </h5>
                    </p>
                    <p>
                      <h5>
                        # of Bedrooms: <span>4</span>
                      </h5>
                    </p>
                    <p>
                      <h5>
                        # Bathrooms: <span>3.5</span>
                      </h5>
                    </p>
                    <p>
                      <h5>
                        Home Size (sq ft): <span>2200</span>
                      </h5>
                    </p>
                    <p>
                      <h5>
                        Lot Size (sq ft): <span>5000</span>
                      </h5>
                    </p>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade test-divs" id="sellermatches">
                <div className="sellermatches">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="text-center">Seller Matches</h1>
                    </div>
                  </div>
                  <div className="row card-row">
                    <div className="col-sm-5 seller-match-cards" />
                    <div className="col-sm-5 seller-match-cards" />
                  </div>
                  <div className="row card-row">
                    <div className="col-sm-5 seller-match-cards" />
                    <div className="col-sm-5 seller-match-cards" />
                  </div>
                  <div className="row card-row">
                    <div className="col-sm-5 seller-match-cards" />
                    <div className="col-sm-5 seller-match-cards" />
                  </div>
                  <div className="row card-row">
                    <div className="col-sm-5 seller-match-cards" />
                    <div className="col-sm-5 seller-match-cards" />
                  </div>
                </div>
              </div>
              <div class="tab-pane fade test-divs" id="chat">
                <div className="row chat">
                  <div align="center" className="col-sm-12">
                    <h1 className="text-center">Chat</h1>
                    <div className="chatBox">
                      <p>Hello</p>
                      <p>Hi there!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade test-divs" id="favorites">
                <div className="favorites">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="text-center">Favorites</h1>
                    </div>
                  </div>
                  <div className="row buyer-fav-row">
                    <div className="col-sm-5 buyer-fav-cards" />
                    <div className="col-sm-5 buyer-fav-cards" />
                  </div>
                  <div className="row buyer-fav-row">
                    <div className="col-sm-5 buyer-fav-cards" />
                    <div className="col-sm-5 buyer-fav-cards" />
                  </div>
                  <div className="row buyer-fav-row">
                    <div className="col-sm-5 buyer-fav-cards" />
                    <div className="col-sm-5 buyer-fav-cards" />
                  </div>
                  <div className="row buyer-fav-row">
                    <div className="col-sm-5 buyer-fav-cards" />
                    <div className="col-sm-5 buyer-fav-cards" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* tabs end */}
          <div className="empty-space" />
        </div>
      </div>
    );
}
}

export default Buyer;
