var http = require('http');
var fs = require('fs')
var path = require('path')
var url = require('url')
var Config = require('./model/getSuffixNameJson')
/**
 * http.createServer()创建http服务器
*/
console.log(path.extname('index.html')) // 输出.html
http.createServer(function(req,res){
  /**
   * req = request 获取浏览器参数
   * res = response 返回数据
  */

  /**
   * 过滤掉？之后的数据
   * 例: www.xx.com/index.html?asdasdadas=2 -----> www.xx.com/index.html
   */
  var urlName = url.parse(req.url).pathname

  if (urlName == '/favicon.ico') return

  if (urlName == '/') {
    urlName = 'index.html'
  }
  var suffixName = Config.getSuffixName(path.extname(urlName))

  fs.readFile(`static/${urlName}`, (err, data)=>{
    if (err) {
      fs.readFile('static/404.html', (error, result)=>{
        if (error) return
        res.writeHead(200, {"Content-Type": `${suffixName};charset=UTF-8`});
        res.write(result)
        res.end()
      })
    } else {
      res.writeHead(200, {"Content-Type": `${suffixName};charset=UTF-8`});
      res.write(data)
      res.end()
    }
  
  })

}).listen('8080')

console.log('server is running')