var http = require('http');
var path = require('path')

var router = require('./model/router')
/**
 * http.createServer()创建http服务器
*/
console.log(path.extname('index.html')) // 输出.html
http.createServer(function(req,res){
  router.static(req,res)

}).listen('8080')

console.log('server is running')