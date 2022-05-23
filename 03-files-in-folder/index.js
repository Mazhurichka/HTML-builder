const path = require('path')
const dirPath = path.join(__dirname, '/03-files-in-folder/secret-folder')
const fs = require('fs')
const readline = require('readline')
const process = require('process')
// const promices = require('fs').promises

fs.readdir(
  './03-files-in-folder/secret-folder/',
  (arr, data) => {
    data.forEach((file) => {
      fs.stat('./03-files-in-folder/secret-folder/' + file, (err, stats) => {
        if (err) {
          throw err
        }
        if (stats.isFile(file)) {
          console.log(file, ' - ', path.extname(file), ' - ', stats.size + 'kb')
        }
      })
    })
  },
  { withFileTypes: true }
)
