var url = require('url')

function write (res) {
  res.send = function(data) {
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
    res.end(data)
  }
}
var Router = function() {
  var Obj = this

  this._get = {}

  this._post = {}
  var app = function(req, res) {
    write(res)
    var pathname = url.parse(req.url).pathname
    if (pathname == '/favicon.ico') return
    var method = req.method.toLowerCase()


    if (!pathname.endsWith('/')){
      pathname = `${pathname}/`
    }
    if (Obj['_'+  method][pathname] ) {

        if (method == 'post') {
              /**
               * 获取数据
              */
            var postData = ''
            req.on('data', (data)=>{
              postData += data
            })
            req.on('end', (err, data)=>{
              req.body = postData
              // res.end(postData)
              Obj['_'+  method][pathname](req, res)

            })
        } else {
          Obj['_'+  method][pathname](req, res)
        }
    } else {
      res.send('无效路径')
    }
  }

  app.get = function(string, callback){
    if (!string.endsWith('/')) {
      string = `${string}/`
    }
    if (!string.startsWith('/')) {
      string = `/${string}`
    }
    // 注册方法
    Obj._get[string] = callback
  }

  app.post = function(string, callback){
    if (!string.endsWith('/')) {
      string = `${string}/`
    }
    if (!string.startsWith('/')) {
      string = `/${string}`
    }
    // 注册方法
    Obj._post[string] = callback
  }
  return app
}()

module.exports = Router