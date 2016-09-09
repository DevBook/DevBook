var fs = require('fs')

function getAll(resource, callback) {
  fs.readFile(`${__dirname}/${resource}.json`, 'utf8', function (err, fileContents) {
    if(err) {
      console.log("ERROR: ", err)
      callback(err)
    }
    callback(null, fileContents)
  })
}

module.exports = {
  getAll:getAll
}
