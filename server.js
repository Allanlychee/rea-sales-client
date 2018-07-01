const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
var bodyparser = require("body-parser");
const passport = require("passport");
const users = require("./routes/users");
const profile = require("./routes/profile");
const posts = require("./routes/posts");
const addHome = require("./routes/api/Admin");
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBe4e-dSQ2ZNtQVt0rr2_E5z9amEQYquAA'
});



const PORT = process.env.PORT || 3001;
const app = express();
require("dotenv").config();

mongoose
  .connect("mongodb://hung:root@ds137740.mlab.com:37740/devconnectorhung")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(require("./routes/apiroutes"));
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/routes/users", users);
app.use("/routes/profile", profile);
app.use("/routes/posts", posts);
app.use(addHome);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
