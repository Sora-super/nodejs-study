var http = require("http")

var Config = require('./config.js')
var app = http.createServer(function(req,res) {
  if (req.url == '/favicon.ico') return

  res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
  res.write('commonjs')
  console.log(Config)
  res.end()
})

app.listen(8081)

console.log('server is running')