import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Main from './main'
import Info from './info'
import Contact from './contact'
import userReg from './userReg'


let statusMessage = "Test State"

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
          <Route exact path='/' component={Main} />
          <Route exact path='/info' component={Info} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/userReg' component={userReg} />
        </div>
      </Router>
    )
  }
}

export default AppRouter
