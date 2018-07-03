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
    if (nextProps.auth.isAuthenticated //nextProps.auth.user.userType='Admin'
  ) {
      this.props.history.push('/dashboard')
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
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
      <body className="text-center">
        <form className="form-signin" onSubmit={this.onSubmit}>

          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

          <label for="inputEmail" className="sr-only">Email address</label>

          <input
            name="email"
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            value={this.state.name}
            onChange={this.onChange}
            required
            autofocus />
          <label for="inputPassword" className="sr-only">Password</label>
          <input
            name="password"
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            value={this.state.name}
            onChange={this.onChange}
            required />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
          </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </body>
    );
  }
}

Login.PropTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login);

