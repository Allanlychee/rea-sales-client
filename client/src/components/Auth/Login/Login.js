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
<<<<<<< HEAD
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
=======
      // <body class="text-center">
<div id="login">
           
   <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />
 
<article>

<h1>USER LOGIN <br /> </h1>
      <form class="form-signin">
        
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
      
</article>
{/* <!--  Video is muted & autoplays, placed after major DOM elements for performance & has an image fallback  --> */}
<video  autoplay="true" loop id="video-background" muted plays-inline>
  <source src="https://static.videezy.com/system/resources/previews/000/007/790/original/4K_UHD_Drone_Bellingham_Washington_Neighborhood_Reavealing__Fernando.mp4" type="video/mp4" />
</video>
</div>
>>>>>>> 5c56dc1b51f47f067fe572fd47cd16cca76a14f7
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

