import React, { Component } from "react";
import './seller.css'


class Seller extends Component {
    componentDidMount() {
        document.getElementById("criteriaTAB").click()
       }
  render() {
    return (
<div className="buyerBody">
                <div>
                    {/* <link
                        href="https://fonts.googleapis.com/css?family=Oswald"
                        rel="stylesheet"
                        type="text/css"
                    /> */}
                    <div className="container buyerContainer">
                        {/* buyer profile card -- maybe make this it's own component since it can be made dynamic -- this will be a test */}
                        <div className="empty-space" />

                        <div className="row profile-card">
                            <div className="col-sm-4" />
                            <div className="col-sm-4 image-div">
                                <div className="image-container">
                                    <img
                                        src="https://avatars2.githubusercontent.com/u/22942831?s=460&v=4"
                                        className="img-circle"
                                        alt="Avatar"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-4" />
                            <div className="col-sm-12">
                                <p>
                                    <h2>  
                                        User: <span>Seller
                                        </span>
                                    </h2>
                                    <h5>
                                        Name: <span>Quinton Fults</span>
                                    </h5>
                                </p>
                                <p>
                                    <h5>
                                        Sex: <span>Male</span>
                                    </h5>
                                </p>
                                <p>
                                    <h5>
                                        Age: <span>23</span>
                                    </h5>
                                </p>
                                <p>
                                    <h5>
                                        Profession: <span>Super Coder</span>
                                    </h5>
                                </p>
                                <p>
                                    <h5>
                                        Marital Status: <span>Not-Known</span>
                                    </h5>
                                </p>
                                <p>
                                    <h5>
                                        Children: <span>0</span>
                                    </h5>
                                </p>
                                <p>
                                    <h5>
                                        Yearly Income: <span>$1,500,000,000</span>
                                    </h5>
                                </p>
                                <p>
                                    <h5>
                                        City of current residence: <span>Irvine</span>
                                    </h5>
                                </p>
                            </div>
                        </div>
                        {/* profile card end */}

                        {/* ======================================================== */}

                        {/* tabs start */}
                        <ul class="nav nav-tabs justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link" id="criteriaTAB" data-toggle="tab" href="#criteria">
                                    Buyer Criteria
                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#sellermatches">
                                    Matches
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
                                <div class="tab-pane test-divs" id="criteria">
                                    <div className="row criteria">
                                        <div className="col-sm-12">
                                            <p>
                                                <h5>
                                                    Married: <span>Yes</span>
                                                </h5>
                                            </p>
                                            <p>
                                                <h5>
                                                    Children: <span>N/A</span>
                                                </h5>
                                            </p>
                                            <p>
                                                <h5>
                                                    Income Range: <span>$200,0000+</span>
                                                </h5>
                                            </p>
                                            <p>
                                                <h5>
                                                    Letter of Approval: <span>Yes</span>
                                                </h5>
                                            </p>
                                            <p>
                                                <h5>
                                                    Financing Completed: <span>Yes</span>
                                                </h5>
                                            </p>
                                            <p>
                                                <h5>
                                                    Amount Financed: <span>$20,000,000</span>
                                                </h5>
                                            </p>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade test-divs" id="sellermatches">
                                    <div className="sellermatches">
                                        <div className="row">
                                            <div className="col-sm-12">
                                            </div>
                                        </div>
                                        <div className="row card-row">
                                            <div className="col-sm-5 seller-match-cards">
                                            <img src="../client/src/components/Profile/HomeBuyerProf/HomeMatch-02.png" />
                                            </div>
                                            <div className="col-sm-5 seller-match-cards">
                                            <img src="HomeMatch-01.png" />
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
                                    </div>
                                </div>
                                <div class="tab-pane fade test-divs" id="chat">
                                    <div className="row chat">
                                        <div align="center" className="col-sm-12">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* tabs end */}
                        <div className="empty-space" />
                    </div>
                </div>
        {/* <!--  Video is muted & autoplays, placed after major DOM elements for performance & has an image fallback  --> */}
        <video autoplay="true" loop id="video-background" muted plays-inline>
          <source src="https://static.videezy.com/system/resources/previews/000/007/790/original/4K_UHD_Drone_Bellingham_Washington_Neighborhood_Reavealing__Fernando.mp4" type="video/mp4" />
        </video>
            </div>
        );
    }
}


 

export default Seller;