var express = require('express')
var ejs = require('ejs')
var app = express()

app.set('view engine', 'ejs')

/**
 * 设置默认页面入口
 * app.set('views', __dirname + '/static')
*/

// 静态文件
app.use(express.static('public'))


/**
 * 配置虚拟目录静态服务
 * app.use('/static', express.static('public'))
*/
app.get('/', (req, res) =>{
  res.render('index')
})

app.get('/list', (req, res) =>{
  res.render('list', {
    list: [1,2,3]
  })
})
app.listen('8080', '127.0.0.1')

console.log('Server is running in 8080')