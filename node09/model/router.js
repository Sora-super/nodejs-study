  /**
   * req = request 获取浏览器参数
   * res = response 返回数据
  */


  var fs = require('fs')
  var events = require('events')
  var url = require('url')
  var path = require('path')
  var EventEmitter = new events.EventEmitter()
  exports.static = function(req, res){
    var urlName = url.parse(req.url).pathname

    if (urlName == '/favicon.ico') return
  
    if (urlName == '/') {
      urlName = 'index.html'
    }
    /**
     * 过滤掉？之后的数据
     * 例: www.xx.com/index.html?asdasdadas=2 -----> www.xx.com/index.html
     */
    getSuffixName(path.extname(urlName))
    EventEmitter.on('send', (suffixName)=>{
      fs.readFile(`static/${urlName}`, (err, data)=>{
        if (err) {
          fs.readFile('static/404.html', (error, result)=>{
            if (error) return
            res.writeHead(200, {"Content-Type": `${suffixName};charset=UTF-8`});
            /**
             * 使用EventEmitter会出现Error [ERR_STREAM_WRITE_AFTER_END]: write after end错误
             * 这边建议直接end返回
            */
            // res.write(result)
            res.end(result)
          })
        } else {
          res.writeHead(200, {"Content-Type": `${suffixName};charset=UTF-8`});
          // res.write(data)
          res.end(data)
        }
      
      })
    })

  }


function getSuffixName (url) {

  fs.readFile('model/mime.json', 'utf8',(err,data)=> {
    if (err){
      console.log(err)
      return
    }
    var result = JSON.parse(data)
    for (var i in result) {
      if (i == url) {
        // return result[i]
        EventEmitter.emit('send', result[i])
        return
      }
    }
  })

}

