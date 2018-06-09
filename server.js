const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
var bodyparser = require('body-parser')
const PORT = process.env.PORT || 3001
const app = express()
require("./control/dotenv").config();

var Zillow = require('node-zillow');

//Instantiate
var zillow = new Zillow(keys.ZWSID);

var parameters = {
  zpid:111111
}

zillow.get('GetZestimate', parameters)
.then(function(results){
  console.log(results)
})





mongoose.connect('mongodb://localhost/myusersDB')

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(require('./routes/apiroutes'))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`)
})
