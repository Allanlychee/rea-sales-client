import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Register from './Auth/Register/Register'
import Login from './Auth/Login/Login'
import Footer from "./Footer/Footer"
import Admin from "./Profile/Admin/admin"
import addSeller from "./Profile/Admin/addSeller"
import viewMatch from "./Profile/Admin/ViewOrMatch"
import viewSellers from "./Profile/Admin/viewSellers"
import BuyerReg from "./Profile/HomeBuyerProf/buyerReg"
import Buyer from "./Profile/HomeBuyerProf/buyer"
import Seller from "./Profile/HomeSellerProf/seller"
import Representative from './Profile/RealEstateRepProf/rep';

let statusMessage = ""

class AppRouter extends Component {

  state = {
    statusMessage
  }

  render () {
    return (
      <Router>
        <div>
          <Navbar 
          statusMessage = {this.state.statusMessage}
          />
          <Route exact path='/' component={Home} />
          <Route exact path='/Register' component={Register} />
          <Route exact path='/Login' component={Login} />
          {/* Admin */}
          <Route exact path='/Admin' component={Admin} />
          <Route exact path='/Admin/View-Match' component={viewMatch} />
          <Route exact path='/Admin/Add-Seller' component={addSeller} />
          <Route exact path='/Admin/View-Sellers' component={viewSellers} />
          {/* Buyer*/}
          <Route exact path='/Buyer' component={Buyer} />
          <Route exact path='/BuyerReg' component={BuyerReg} />
          <Route exact path='/Seller' component={Seller} />
          <Route exact path='/Representative' component={Representative} />
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default AppRouter
