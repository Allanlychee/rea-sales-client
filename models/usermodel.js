var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var usermodel = new Schema({
  firstname: {
    type: String,
    default: "Quinton"
  },
  lastname: {
    type: String,
    default: "chilla"
  },
  email: {
    type: String,
    default: "a@b.com",
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    default: "AAbb1122!!"
  },
  userType: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model("User", usermodel);

module.exports = User;