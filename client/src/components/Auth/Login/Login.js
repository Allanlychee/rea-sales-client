import React, { Component } from "react";
import './Login.css'

class Login extends Component {
  render() {
    return (
      // <body class="text-center">
      <div id="login">
      <h1>USER LOGIN <br /> </h1>
        <div>

          <form class="form-signin">

            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
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

export default Login;

