var http = require('http')
var url = require('url')
var ejs = require('ejs')



http.createServer(function(req, res){
  if (req.url == '/favicon.ico') return

  res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"})
  var pathname = url.parse(req.url).pathname

  if (pathname == '/login') {
    ejs.renderFile('views/login.ejs', {
      msg: '你好啊'
    }, (err, data)=>{
      if (err) {
        console.log(err)
        return
      }
      res.end(data)
    })
  } else {
    res.end('结束')
  }
}).listen('8089')

console.log('server is Running at 8089')