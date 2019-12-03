var http = require('http');

/**
 * http.createServer()创建http服务器
*/

http.createServer(function(req,res){
  /**
   * req = request 获取浏览器参数
   * res = response 返回数据
  */
  res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
  res.write('写啊写啊写bug<br>');
  res.end('Hello World')
}).listen('8080')

console.log('server is running')