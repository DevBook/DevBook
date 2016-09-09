var express = require('express')
var db = require('./db/db-utils')
var exphbs = require('express-handlebars')
var app = express()

//view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//route to basic server
app.get('/', function (req, res) {
  db.getAll('dev-stars', function (err, devstarsObj) {
    if(err) {
      callback(err)
    }

    res.render('devstars-index', devstarsObj)
  })
})

app.get('/devstars/:id', function (req, res) {
  db.getAll('dev-stars', function (err, devstarsObj) {
    if(err) {
      callback(err)
    }


    var devstar = devstarsObj.devstars.filter(function (person) {
      return person.id === Number(req.params.id)
    })[0]

    res.render('devstars-bio', devstar)
  })
})


module.exports = app
