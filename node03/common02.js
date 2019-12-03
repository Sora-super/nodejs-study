var http = require("http")
/**
 * 当前目录找不到，会去node_modules里面找
*/
var Tools = require('add')
var app = http.createServer(function(req,res) {
  if (req.url == '/favicon.ico') return

  res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
  
  console.log(Tools.add(1, 2))
  res.end()
})

app.listen(8081)

console.log('server is running')