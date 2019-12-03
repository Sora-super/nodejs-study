

var http = require('http')
var url = require('url')
var Obj = {}
var app = function (req, res) {


  var pathname = url.parse(req.url).pathname
  res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
  
  if (!pathname.endsWith('/')){
    pathname = `${pathname}/`
  }

  if (Obj[pathname]) {
    Obj[pathname](req,res)
  } else {
    res.end('无效路径')
  }
}


app.get = function (string, callback) {
  if (!string.endsWith('/')) {
    string = `${string}/`
  }
  if (!string.startsWith('/')) {
    string = `/${string}`
  }
  // 注册方法
  Obj[string] = callback
}


app.get('login', function(req, res) {
  res.end('login')
})

app.get('register', function(req, res) {
  res.end('register')
})


http.createServer(app).listen('8083')

console.log('Server is Running in 8083')

