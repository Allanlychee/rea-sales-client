import React, { Component, Fragment } from "react";
import AppRouter from "./components/approuter";
import "./App.css";
import store from './store';
import { Provider } from 'react-redux'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <AppRouter />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
