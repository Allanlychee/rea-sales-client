import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Login.css';
import { connect, Provider } from 'react-redux';
import { loginUser } from '../../../actions/authActions';


class Login extends Component {
  constructor() {

    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Authentication and redirect for Admin
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/Dashboard');
      if (nextProps.auth.user.userType === "Buyer") {
        this.props.history.push('/Buyer');
      }
      if (nextProps.auth.user.userType === "Seller") {
        this.props.history.push('/Seller');
      }
      if (nextProps.auth.user.userType === "Admin") {
        this.props.history.push('/Admin');
      }
      if (nextProps.errors) {
        this.setState({ errors: nextProps.errors });
      }
    }
  }


  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(userData)
    this.props.loginUser(userData)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      // <body class="text-center">
      <div id="login">
        <h1>USER LOGIN <br /> </h1>
        <div>

          <form class="form-signin" onSubmit={this.onSubmit}>

            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus
              value={this.state.name}
              onChange={this.onChange}
              name="email"
            />


            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required
              value={this.state.name}
              onChange={this.onChange}
              name="password"
            />
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
          </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>

        </div>
        {/* <!--  Video is muted & autoplays, placed after major DOM elements for performance & has an image fallback  --> */}
        <video autoplay="true" loop id="video-background" muted plays-inline>
          <source src="https://static.videezy.com/system/resources/previews/000/007/790/original/4K_UHD_Drone_Bellingham_Washington_Neighborhood_Reavealing__Fernando.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}

Login.PropTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

// export default connect(mapStateToProps, { loginUser })(Login);
export default Login;

