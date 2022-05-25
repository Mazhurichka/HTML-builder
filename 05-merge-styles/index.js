const path = require('path')
const fs = require('fs')


  fs.readdir(
    __dirname,
    (arr, data) => {

      data.forEach((file) => {
        fs.stat(__dirname + '/' + file, (err, stats) => {
          if (err) {
            throw err
          }

          if (stats.isDirectory(file)) {
            fs.readdir(__dirname + '/' + file, (err, filesInOtherFolder) => {
              if (err) throw err

              filesInOtherFolder.forEach((file) => {
                //console.log(file)
                if(file.includes('.css') && file !== 'bundle.css') {
                  fs.readFile(
                    __dirname + '/styles/' + file,
                    'utf8',
                    (err, data) => {
                      if (err) throw err

                      fs.appendFile(
                        __dirname + '/project-dist/bundle.css',
                        data,
                         (err) => {
                          if(err) throw err;
                          console.log('files marged')
                        }
                      )
                    }
                  )
                }

               
                
              })
            })
          }
        })
      })
    },
    { withFileTypes: true }
  )

