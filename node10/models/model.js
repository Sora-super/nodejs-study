
var ejs = require('ejs')
var fs = require('fs')
var url = require('url')


var app = {
  index: function(req, res){
    console.log('主页')
    res.end('主页')
  },
  login: function(req, res){
    console.log('登录')
    ejs.renderFile('views/form.ejs',{},(err, data)=>{
      res.end(data)
    })
  },
  register: function(req, res){
    console.log('注册')
  },
  dologin: function(req, res) {
    var method = req.method.toLowerCase()

    if (method == 'get') {
      /**
       * 获取数据
      */
      var query = url.parse(req.url).query

      res.end(query)
    } else {
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
        console.log(postData)
      })
      res.end(postData)
    }

  }
}

module.exports = app