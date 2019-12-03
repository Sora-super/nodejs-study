var http = require('http')
var url = require('url')
var ejs = require('ejs')
var fs = require('fs')


http.createServer(function(req, res){
  if (req.url == '/favicon.ico') return

  res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"})
  var pathname = url.parse(req.url).pathname
  var method = req.method.toLowerCase()
  if (pathname == '/login') {
    ejs.renderFile('views/form.ejs', {
      msg: '你好啊'
    }, (err, data)=>{
      if (err) {
        console.log(err)
        return
      }
      console.log(data)
      res.end(data)
    })
  } else if (pathname == '/dologin' && method == 'get') {
    /**
     * 获取数据
    */
    var query = url.parse(req.url).query

    console.log(query)
    res.end(query)

  }else if (pathname == '/dologin' && method == 'post') {
    /**
     * 获取数据
    */
    var postData = ''
    req.on('data', (data)=>{
      postData += data
    })
    req.on('end', (err, data)=>{
      fs.appendFile('login.txt', `${postData}\n`, (err, data)=>{
        if (err) {
          console.log(err)
          return
        }
        console.log('写入成功')
      })
      res.end(postData)
    })

  }else {
    ejs.renderFile('views/index.ejs', {
      msg: '你好啊'
    }, (err, data)=>{
      if (err) {
        console.log(err)
        return
      }
      res.end(data)
    })
  }
}).listen('8089')

console.log('server is Running at 8089')