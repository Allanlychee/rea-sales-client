import React, { Component } from "react";
import './buyer.css';
// import App from '../Tabs/index';


class Buyer extends Component {
    
    render() {
                return (
                    <div>
                    <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />
                        <div className="container">
                    {/* buyer profile card -- maybe make this it's own component since it can be made dynamic -- this will be a test */}
                    <div className="empty-space"></div>
         
                            <div className="row profile-card">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4 image-div">
                                    <div className="image-container">
                                        <img src="http://kylenelson.com/wp-content/uploads/2017/03/Jaycob-Headshot-1-2.jpg" className="img-circle" alt="Avatar"/>
                                    </div>
                            </div>
                            <div className="col-sm-4"></div>
                                <div className="col-sm-12">
                                
                                <p>
                                    <span className="boldfont">Name: </span> <span>Andy</span>               
                                </p>
                                <p>
                                    <h5>Sex: <span>Male</span></h5>
                                </p>
                                <p>
                                    <h5>Age: <span>30</span></h5>
                                </p>
                                <p>
                                    <h5>Profession: <span>Web Developer</span></h5>
                                </p>
                                <p>
                                    <h5>Marital Status: <span>Married</span></h5>
                                </p>
                                <p>
                                    <h5>Children: <span>2</span></h5>
                                </p>
                                <p>
                                    <h5>Yearly Income: <span>$150,000</span></h5>
                                </p>
                                <p>
                                    <h5>City of current residence: <span>Chino</span></h5>
                                </p>
                                </div>
                                </div>
                                {/* profile card end */}
                                
                                {/* ======================================================== */}

                                {/* tabs start */}
                                <div className="row criteria">
                                    <div className="col-sm-12">
                                        <h1 className="text-center">Criteria</h1>
                                        <p>
                                    <h5>Price: <span>Hello</span></h5>                
                                </p>
                                <p>
                                    <h5>Location: <span>Hello</span></h5>
                                </p>
                                <p>
                                    <h5># of Bedrooms:</h5>
                                </p>
                                <p>
                                    <h5># Bathrooms: </h5>
                                </p>
                                <p>
                                    <h5>Home Size (sq ft):</h5>
                                </p>
                                <p>
                                    <h5>Lot Size (sq ft): </h5>
                                </p>
                            
                                    </div>
                                </div>
                                {/* tabs end */}

                                {/* ============================================================== */}
                                <div className="sellermatches">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="text-center">Seller Matches</h1>
                                    </div>
                                </div>
                                    <div className="row card-row">
                                    <div className="col-sm-5 seller-match-cards"></div>
                                    <div className="col-sm-5 seller-match-cards"></div>
                                    </div>
                                    <div className="row card-row">
                                    <div className="col-sm-5 seller-match-cards"></div>
                                    <div className="col-sm-5 seller-match-cards"></div>
                                    </div>
                                    <div className="row card-row">
                                    <div className="col-sm-5 seller-match-cards"></div>
                                    <div className="col-sm-5 seller-match-cards"></div>
                                    </div>
                                    <div className="row card-row">
                                    <div className="col-sm-5 seller-match-cards"></div>
                                    <div className="col-sm-5 seller-match-cards"></div>
                                    </div>
                                </div>

                                 <div className="row chat">
                                    <div align="center" className="col-sm-12">
                                        <h1 className="text-center">Chat</h1>
                                        <div className="chatBox">
                                        <p>Hello</p>
                                        <p>Hi there!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="favorites">
                                 <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="text-center">Favorites</h1>
                                    </div>
                                </div>
                                <div className="row buyer-fav-row">
                                    <div className="col-sm-5 buyer-fav-cards"></div>
                                    <div className="col-sm-5 buyer-fav-cards"></div>
                                    </div>
                                    <div className="row buyer-fav-row">
                                    <div className="col-sm-5 buyer-fav-cards"></div>
                                    <div className="col-sm-5 buyer-fav-cards"></div>
                                    </div>
                                    <div className="row buyer-fav-row">
                                    <div className="col-sm-5 buyer-fav-cards"></div>
                                    <div className="col-sm-5 buyer-fav-cards"></div>
                                    </div>
                                    <div className="row buyer-fav-row">
                                    <div className="col-sm-5 buyer-fav-cards"></div>
                                    <div className="col-sm-5 buyer-fav-cards"></div>
                                    </div>
                                </div>
                                <div className="empty-space"></div>

                             

                            {/* <div className="row">
                                <div className="col-md-12 text-center">
                                    <h1 className="display-3 mb-4">Buyer page</h1>
                                    <p className="lead">
                                        {" "}
                                        Text Here
                                    </p>
                                    <hr />
                                    <a className="btn btn-lg btn-info mr-2" href="#">
                                        View Matched Houses</a>
                                    <br />
                                    <br />
                                    <a className="btn btn-lg btn-light" href="#">
                                        Favorite Homes (Sellers)</a>
                                    <br />
                                    <br />

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
                            </div> */}
                        </div>
                


            </div>
  
        )
    }
}

export default Buyer;