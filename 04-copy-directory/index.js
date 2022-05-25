const path = require('path')
const fs = require('fs')

function copyDir() {
  fs.readdir(
    __dirname,
    (arr, data) => {
      fs.mkdir(__dirname + '/files-copy', () => {
        console.log('folder files-copy created')
      })

      data.forEach((file) => {
        fs.stat(__dirname + '/' + file, (err, stats) => {
          if (err) {
            throw err
          }

          if (stats.isFile(file)) {
            fs.copyFile(
              __dirname + '/' + file,
              __dirname + '/files-copy/' + file,
              (err) => {
                if (err) throw err
                console.log('files successfully copied', file)
              }
            )
          }

          if (stats.isDirectory(file) && file !== 'files-copy') {
            fs.readdir(__dirname + '/' + file, (err, filesInOtherFolder) => {
              if (err) throw err

              filesInOtherFolder.forEach((file) => {
                fs.copyFile(
                  __dirname + '/files/' + file,
                  __dirname + '/files-copy/' + file,
                  (err) => {
                    if (err) throw err
                    console.log('files successfully copied', file)
                  }
                )
              })
            })
          }
        })
      })
    },
    { withFileTypes: true }
  )
}

copyDir()
