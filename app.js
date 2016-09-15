var express = require('express')
var db = require('./db/db-utils')
var path = require('path')
var exphbs = require('express-handlebars')
var app = express()
var bodyParser = require('body-parser')

// setup
app.use(bodyParser.urlencoded({extended: false}))

//view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// serve the files in public
app.use(express.static(path.join(__dirname, 'public')))

//route to basic server
app.get('/add-dev-star', function (req, res) {
  res.render('devstars-add')
})

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

app.post('/', function (req, res) {
  if (req.body.commit === 'Create Dev-Star') {
    db.getAll('dev-stars', function (err, devstarsObj) {
      if(err) {
        callback(err)
      }
      var newDevstar = req.body
      delete newDevstar['commit']
      newDevstar.id = devstarsObj.length
      devstarsObj.devstars.push(newDevstar)
      res.render('devstars-index', devstarsObj)
      db.write('dev-stars', devstarsObj, function (err, file) {
        if (err) {
          console.log("Error ", err)
        }
      })
  })
}
})

app.get('/statistics', function (req, res) {
  db.getAll('dev-stars', function (err, devstarsObj) {
    var stars = devstarsObj.devstars
    // var maxAge =
    console.log(devstarsObj.devstars)
    res.render('statistics', devstarsObj)
  })
})

module.exports = app
