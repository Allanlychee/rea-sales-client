import React, { Component, Fragment } from 'react'
import AppRouter from './components/approuter'
import axios from 'axios'

class App extends Component {
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
      <Fragment>
        <AppRouter />
      </Fragment>
    )
  }
}

export default App
