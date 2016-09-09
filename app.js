var express = require('express')

var app = express()

//view engine setup
app.engine('handlebars,' exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//route to basic server
app.get('/', function (req, res) {
  res.send("Hello World")
})

//TO DO make redirect

module.exports = app
