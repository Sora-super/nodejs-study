var express = require('express')

var app = new express()

app.get('/', (req, res)=>{
  res.send('哈哈')
})

// 动态路由
app.get('/user/:uid', (req, res) =>{
  var uid = req.params.uid
  res.send(uid)
})

// 获取get传参 http://localhost:8081/list?a=1

app.get('/list', (req, res) =>{
  var query = req.query
  res.send(query)
})
app.listen('8081', '127.0.0.1')