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

          <div class='brand'>
            <a href='https://www.jamiecoulter.co.uk' target='_blank'>
              <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/logo.png' alt="swankyLogo" />
            </a>
          </div>
          {/* <!-- / Begin Body --> */}
          <div class='swanky'>
            {/* <!-- / Introduction Block --> */}
            <div className="swankyContent">
                
              
              </div>
            {/* <!-- /////////// Begin Dropdown //////////// --> */}
            <div class='swanky_wrapper'>
              <input id='Dashboard' name='radio' type='radio' />
              <label for='Dashboard'>
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/dash.png' alt="swankyDash"/>
                <span>Dashboard</span>
                <div class='lil_arrow'></div>
                <div class='bar'></div>
                <div class='swanky_wrapper__content'>
                  <ul>
                    <li>Tools</li>
                    <li>Reports</li>
                    <li>Analytics</li>
                    <li>Timeline</li>
                  </ul>
                </div>
              </label>
              <input id='Sales' name='radio' type='radio' />
              <label for='Sales'>
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/del.png' alt="swankySales"/>
                <span>Sales</span>
                <div class='lil_arrow'></div>
                <div class='bar'></div>
                <div class='swanky_wrapper__content'>
                  <ul>
                    <li>New Sales</li>
                    <li>Expired Sales</li>
                    <li>Sales Reports</li>
                    <li>Deliveries</li>
                  </ul>
                </div>
              </label>
              <input id='Messages' name='radio' type='radio' />
              <label for='Messages'>
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mess.png' alt ="swankyMsges"/>
                <span>Messages</span>
                <div class='lil_arrow'></div>
                <div class='bar'></div>
                <div class='swanky_wrapper__content'>
                  <ul>
                    <li>Inbox</li>
                    <li>Outbox</li>
                    <li>Sent</li>
                    <li>Archived</li>
                  </ul>
                </div>
              </label>
              <input id='Settings' radio='radio' type='radio' />
              <label for='Settings'>
                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/set.png' alt="swankySettings"/>
                <span>Settings</span>
                <div class='lil_arrow'></div>
                <div class='bar'></div>
                <div class='swanky_wrapper__content'>
                  <ul>
                    <li>Databases</li>
                    <li>Design</li>
                    <li>Change User</li>
                    <li>Log Out</li>
                  </ul>
                </div>
              </label>
            </div>

          </div>
          </div>
        </div>
        )
      }
    }
    
export default Admin;