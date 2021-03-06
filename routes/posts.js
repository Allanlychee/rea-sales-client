const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post model
const Post = require("../models/Post");

// Validation
const validatePostInput = require("../validation/post");

// @route   GET api/users/test
// @desc    Tests post route
// @access  public
router.get("/test", (req, res) => res.json({ msg: "Posts works" }));

// @route   GET api/posts
// @desc    Create post
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    //Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
