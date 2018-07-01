var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var housemodel = new Schema({
    address: {
        type: String,
        default: "Quinton"
    },
    city: {
        type: String,
        default: "chilla"
    },
    state: {
        type: String,
        default: "a@b.com",
        required: true,
        index: { unique: true }
    },
    zipcode: {
        type: String,
        default: "AAbb1122!!"
    },
    longitude: {
        type: String
    },
    latitude: {
        type: String
    },
    bathrooms: {
        type: Number
    },
    bedrooms: {
        type: Number
    },
    Date: {
        type: Date,
        default: Date.now
    },
});

var House = mongoose.model("House", housemodel);

module.exports = House;
