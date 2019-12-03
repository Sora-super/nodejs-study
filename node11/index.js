var http = require('http')

var url = require('url')
var model = require('./models/model')

// model['register']('req')


http.createServer(function(req, res){
  if (req.url == '/favicon.ico') return
  var pathname = url.parse(req.url).pathname.replace('/', '')
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
  try {
    model[pathname](req, res)

  } catch (error) {
    model['index'](req, res)

  }

  // res.end()
}).listen('8081')

console.log('Server is Running in 8081')

