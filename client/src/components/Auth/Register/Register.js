import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post("/routes/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    return (
<div id="register">
             
<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />
 
 <article>
 
 <h1>REGISTER <br /> </h1>  
  
          <form className="form-signin" onSubmit={this.onSubmit}>
            <h1 className="h3 mb-3 font-weight-normal"> Please register </h1>
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
              className="form-control"
              placeholder="Confirm Password"
              name="password2"
              value={this.state.password2}
              onChange={this.onChange}
              required
            />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
          </form>
    </article>
        {/* <!--  Video is muted & autoplays, placed after major DOM elements for performance & has an image fallback  --> */}
<video  autoplay="true" loop id="video-background" muted plays-inline>
  <source src="https://static.videezy.com/system/resources/previews/000/007/790/original/4K_UHD_Drone_Bellingham_Washington_Neighborhood_Reavealing__Fernando.mp4" type="video/mp4" />
</video>
      </div>
    );
  }
}

export default Register;
