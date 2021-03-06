const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../config/keys");
require("../config/passport")(passport);

// Load Input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Load User Model
const User = require("../models/usermodel");

// @route   GET api/users/test
// @desc    Tests post route
// @access  public
router.get("/test", (req, res) => res.json({ msg: "Users works" }));
router.get("/hung", (req, res) => res.json({ msg: "Users is Hung" }));

// @route   POST /users/register
// @desc    Register user
// @access  public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  //finds if email is already taken
  //findOne is a mongoose query method...our email object is being passed in
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      //if there is a user with that email then...=>
      return res.status(400).json({ email: "Email already exists" }); // return message
    } else {
      // else if user is not found then we can proceed to create new user

      // creates new user which is coming from the form.
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        userType: req.body.userType
      });

      // after user is created, we need to hash the password using bcrypt.
      //"bcrypt.genSalt is a method from the bcrypt package."
      //what salting does is it add charactars in front of the password
      bcrypt.genSalt(10, (err, salt) => {
        //bcrypt.hash hashes the password that has just been created
        //newUser.password is coming from the object we just created. which is plain text

        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          // sets newUser password to hash
          newUser.password = hash;
          newUser
            //saves the password
            .save()
            .then(user => res.json(user))
            .catch(error => console.log(error));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @desc    Login user / Returning JWT Token
// @access  public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    //Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }


    // Check Password
    //"password is the password that was submitted in the form"..."user.password is the hashed password"
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched

        //payload is pretty much data. you can put anything you want as a payload
        const payload = {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          userType: user.userType
        }; //create JWT payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600000 },
          (err, token) => {
            res.json({
              payload: payload,
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route GET api/users/current
// @desc Return current user
// access priate
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      firstname: req.user.firstname,
      lastname: req.user.lastname,
      email: req.user.email
    });
  }
);

module.exports = router;
