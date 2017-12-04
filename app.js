//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World')
})

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('App listening to WKRP on port 8080!')
})

// const express = require('express')
// const app = express()
// const server = require('http').createServer(app)

// app.use(express.static('public'))

// app.get('/', function(req, res) {
//   res.sendFile('public/index.html')
// })

// server.listen(8000, () => console.log('listening on 8000'))
