import React, { Component } from 'react'
import axios from 'axios'
import Navbar from "./components/Navbar"

let clickMessage = "Test State"

class App extends Component {

  state = {
    clickMessage
  }

  componentDidMount () {
    axios.post('/users', {
      name: 'Pablo',
      email: 'this@email.com'
    })
      .then(r => {
        console.log(r)
        axios.get('/users')
          .then(r => {
            console.log(r)
          })
          .catch(e => {
            console.log(e)
          })
      })
      .catch(e => {
        console.log(e)
      })
  }
  render () {
    return (
      <Navbar 
      statusMessage={this.state.clickMessage}
      />
    )
  }
}

export default App
