var express = require('express')
var db = require('./db/db-utils')
var path = require('path')
var exphbs = require('express-handlebars')
var app = express()
var Knex = require('knex')
var knex = Knex(require('./knexfile').development)

//view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// serve the files in public
app.use(express.static(path.join(__dirname, 'public')))

//route to basic server
app.get('/', function (req, res) {
  knex.select().from('users').then( function (devstars) {
    res.render('devstars-index', {devstars:devstars})
  }).catch(function (err) {
    console.log(err)
  })
})

app.get('/devstars/:id', function (req, res) {
  knex.select()
    .from('users')
    .where('id', Number(req.params.id))
    .then (function (devstar) {
      res.render('devstars-bio', devstar[0])
    }).catch( function (err) {
      console.log(err);
    })
})



module.exports = app
