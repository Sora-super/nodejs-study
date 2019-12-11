var express = require('express')
var tools = require('./tools/tools')
var app = express()
var config = require('./config/index')
var axios = require('axios')


// app.get('/', async (req, res)=>{
//   const data = await axios.get(obj.url)
//   tools.getUrl(data.data, obj.name)
//   res.send('保存成功')
// })

app.get('/:uid', async(req,res)=>{
  var uid = req.params.uid
  var obj = config.getCataName(uid)
  const data = await axios.get(obj.url)
  tools.getUrl(data.data, obj.name)
  res.send('保存成功')
})

app.listen('8081', '127.0.0.1')