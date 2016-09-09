var express = require('express')

var app = express()

app.get('/', function (req, res) {
  res.send("Hello World")
})
//make redirect

module.exports = app
