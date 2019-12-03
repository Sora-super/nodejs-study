var http = require('http');
var url = require('url');

/**
 * [官方文档](http://nodejs.cn/api/url.html)
 * url.parse()
 * url.format(object)
 * url.resolve(from, to)
*/
http.createServer(function(req,res){

  res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
  
  if (req.url == '/favicon.ico') return
  console.log(req.url)
  /**
   * 第二个参数true 传递进来的参数转换为对象
   */
  var result = url.parse(req.url, true)

  res.write(result.query.id)
  res.end()
}).listen('8080')


console.log('server is running')