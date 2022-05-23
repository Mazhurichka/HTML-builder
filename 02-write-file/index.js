const path = require('path')
const dirPath = path.join(__dirname, '/source.txt')
const fs = require('fs')
const readline = require('readline')
const process = require('process')

const inputt = fs.createReadStream(dirPath, 'utf-8')

inputt.on('data', (chunk) => output.write(chunk))
inputt.on('error', (error) => console.log('Error', error.message))

const { stdin: input, stdout: output } = require('process')

const rl = readline.createInterface({ input, output })

rl.question('Do you want write some text?', (answer) => {
  // TODO: Log the answer in a database

  fs.appendFile(dirPath, answer, (err) => {
    if (err) {
      console.error(err)
      return
    }

    console.log(`Thank you for your valuable feedback: ${answer}`)
    if (answer === 'exit') {
      process.exit()
    }
  })

  console.log(`Thank you for your valuable feedback:${answer}`)
  process.on('SIGINT', function () {

    process.exitCode()
  })

})

