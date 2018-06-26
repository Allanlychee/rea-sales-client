import React, { Component, Fragment } from "react";
import AppRouter from "./components/approuter";
import axios from "axios";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppRouter />
      </Fragment>
    );
  }
}

export default App;
