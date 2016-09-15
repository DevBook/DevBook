var express = require('express')
var router = express.Router()
var db = require('./db/db-utils')
router.get('/devstars', function (req, res, next) {
  db.getAll('dev-stars', function (err, devstarsObj) {
    var stars = devstarsObj.devstars
    // var maxAge =
    res.json(stars)
  })
})
