var express = require('express')
var db = require('./db/db-utils')
var exphbs = require('express-handlebars')
var app = express()

//view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//route to basic server
app.get('/', function (req, res) {
  res.send("Hello I tested myself!!!")
})

//TO DO make redirect

module.exports = app
