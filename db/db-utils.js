var fs = require('fs')

function getAll(resource, callback) {
  fs.readFile(`${__dirname}/${resource}.json`, 'utf8', function (err, fileContents) {
    if(err) {
      console.log("ERROR: ", err)
      callback(err)
    }

    callback(null, JSON.parse(fileContents))
  })
}

function write (resource, file, callback) {
  fs.writeFile(`${__dirname}/${resource}.json`, JSON.stringify(file), function (err) {
    if (err) callback(err)
    console.log('New Dev-Star complete!')
  })
}

module.exports = {
  getAll:getAll,
  write: write
}
