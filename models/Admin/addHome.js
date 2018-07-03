const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
var addHomeSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  address: {
    type: String,
    default: "123 Main Street"
  },
  city: {
    type: String,
    default: "Los Angeles"
  },
  state: {
    type: String,
    default: "CA"
  },
  zip: {
    type: String,
    default: "92000"
  },
  formatted_Addr: {
    type: String,
    default: "123 Main Street Los Angeles, CA 92000"
  },
  price: {
    type: String,
    default: "$9,000"
  },
  description: {
    type: String,
    default: "This is a great home"
  }
});

const AdminAddHome = mongoose.model("AdminAddHome", addHomeSchema);

module.exports = AdminAddHome