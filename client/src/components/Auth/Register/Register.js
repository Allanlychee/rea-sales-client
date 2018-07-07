import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom'
import './Register.css'
import axios from "axios";
import Login from '../Login/Login'

class Register extends Component {
  constructor() {

    super();
    this.state = {
      fireRedirect: false,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      userType: ""

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault()
    this.setState({ fireRedirect: true })
    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      userType: this.state.userType
    };
    console.log(newUser)
    axios
      .post("/routes/users/register", newUser)
      .then((res => console.log(res.data)))
      .catch(err => this.setState({ errors: err.response.data }));

  }

  render() {
    const { from } = this.props.location.state || '/Register'
    const { fireRedirect } = this.state

    return (
      <div id="register">


        <h1>REGISTER</h1>
        <br />



        <form className="form-signin" onSubmit={this.onSubmit}>

          <label htmlFor="inputFirst" className="sr-only">First Name</label>
          <input
            type="text"
            id="inputFirst"
            className="form-control"
            placeholder="First Name"
            name="firstname"
            value={this.state.name}
            onChange={this.onChange}
            required
          />
          <label htmlFor="inputLast" className="sr-only">Last Name</label>
          <input
            type="text"
            id="inputLast"
            className="form-control"
            placeholder="Last Name"
            name="lastname"
            value={this.state.name}
            onChange={this.onChange}
            required
          />
          <label htmlFor="inputEmail" className="sr-only">Email Address</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            required
          />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control form-control-lg"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            required
          />
          <label htmlFor="inputConfirmPassword" className="sr-only">Confirm Password</label>
          <input
            type="password"
            id="inputConfirmPassword"
            className="form-control"
            placeholder="Confirm Password"
            name="password2"
            value={this.state.password2}
            onChange={this.onChange}
            required
          />

          <select
            name="userType"
            type="userType"
            className="form-control"
            value={this.state.userType}
            onChange={this.onChange}
            required>
            <option value="1">userType</option>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
            <option value="Representative">Representative</option>
            <option value="Admin">Admin</option>
          </select>

          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
        </form>
        {fireRedirect && (<Redirect to={from || '/Login'} />)}
        {/* <!--  Video is muted & autoplays, placed after major DOM elements for performance & has an image fallback  --> */}
        <video autoplay="true" loop id="video-background" muted plays-inline>
          <source src="https://static.videezy.com/system/resources/previews/000/007/790/original/4K_UHD_Drone_Bellingham_Washington_Neighborhood_Reavealing__Fernando.mp4" type="video/mp4" />
        </video>
      </div>
    );
    {/* <!--  Video is muted & autoplays, placed after major DOM elements for performance & has an image fallback  --> */ }
  }
}

export default Register;
