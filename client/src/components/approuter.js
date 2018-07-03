import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Register from './Auth/Register/Register'
import Login from './Auth/Login/Login'
import Footer from "./Footer/Footer"

import AdminAddHome from "./Profile/Admin/Pages/adminAddSeller/addSeller";
import Admin from "./Profile/Admin/Pages/adminHome/admin"
import viewMatch from "./Profile//Admin/Pages/adminViewOrMatch/ViewOrMatch"
import viewSellers from "./Profile/Admin/Pages/adminViewSellers/viewSellers"
import Detail from "./Profile/Admin/Pages/adminAddSellerDetail/Detail"

import BuyerReg from "./Profile/HomeBuyerProf/buyerReg"
import Buyer from "./Profile/HomeBuyerProf/buyer"
import Seller from "./Profile/HomeSellerProf/seller"
import Representative from './Profile/RealEstateRepProf/rep';

let statusMessage = ""

class AppRouter extends Component {

  state = {
    statusMessage
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar
            statusMessage={this.state.statusMessage}
          />
          <Route exact path='/' component={Home} />
          <Route exact path='/Register' component={Register} />
          <Route exact path='/Login' component={Login} />
          {/* Admin */}

          <Route exact path='/admin' component={Admin} />
          <Route exact path='/admin/addHome' component={AdminAddHome} />
          <Route exact path="/admin/addHome/:id" component={Detail} />
          <Route exact path='/admin/View-Match' component={viewMatch} />
          <Route exact path='/admin/View-Sellers' component={viewSellers} />

          {/* Buyer*/}
          <Route exact path='/Buyer' component={Buyer} />
          <Route exact path='/BuyerReg' component={BuyerReg} />
          <Route exact path='/Seller' component={Seller} />
          <Route exact path='/Representative' component={Representative} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default AppRouter
