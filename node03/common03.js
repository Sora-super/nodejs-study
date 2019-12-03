var http = require("http")
/**
 * 当前目录找不到，会去node_modules里面找
 * 找到say,去package.json里面找入口文件
*/
var say = require('say')
var app = http.createServer(function(req,res) {
  if (req.url == '/favicon.ico') return

  res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
  
  console.log(say)
  res.end()
})

app.listen(8081)

console.log('server is running')