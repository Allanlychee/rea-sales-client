import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
        <h1>Register</h1>

        <form class="regForm">
          <p><label for="firstname"><b>First Name</b></label>
          <input type="text" name="firstname" placeholder="quinton" /> </p>
          
          <p><label for="lastname"><b>Last Name</b></label>
          <input type="text" name="lastname" placeholder="chilla" /> </p>

          <p><label for="email"><b>Email</b></label>
          <input type="text" name="email" placeholder="a@b.com" /> </p>

          <p><label for="username"><b>User Name</b></label>
          <input type="text" name="username" placeholder="quinchilla" /> </p>

          <p><label for="password"><b>Password</b></label>
          <input type="password" name="password" placeholder="AAbb1122!!" /> </p>


          <label for="password"><b>Confrim Password</b></label>
          <input type="password" name="password-confirm" placeholder="AAbb1122!!" /> 

         
          <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Sign Up</button>
          </div>
        </form>




      </div>
    );
  }
}

export default Register;
