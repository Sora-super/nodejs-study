var http = require('http')

var app = require('./models/router')

var ejs = require('ejs')

// 引入数据库
var MongoClient = require('mongodb').MongoClient

/**
 * 链接数据库
 * article是数据库名称
 */
var url = 'mongodb://localhost:27017/article'

http.createServer(app).listen(3000)


// 增加数据
app.get('/add', function(req,res){
  MongoClient.connect(url, function(err,db){
    if (err) {
      console.log(err)
      return
    }
    var collection = db.collection('user')
    // 增加数据
    collection.insertOne({
      "name": "Mary",
      "age":  "2"
    },function(error, result){
      if (error) {
        console.log(error)
        return
      }
      res.send('增加成功', result)
      // 释放
      db.close()
    })
  })
})

// 修改数据
app.get('/edit', function(req, res){
  MongoClient.connect(url, function(err,db){
    if (err) {
      console.log(err)
      return
    }
    var collection = db.collection('user')
    // 增加数据
    collection.updateOne({
      "name": "Mary",
    },{$set:{'age': 21}},function(error, result){
      if (error) {
        console.log(error)
        return
      }
      res.send('修改成功', result)
      // 释放
      db.close()
    })
  })
})

// 删除数据
app.get('/delete', function(req, res){
  MongoClient.connect(url, function(err,db){
    if (err) {
      console.log(err)
      return
    }
    var collection = db.collection('user')
    // 增加数据
    collection.deleteOne({
      "name": "Mary",
    },function(error, result){
      if (error) {
        console.log(error)
        return
      }
      res.send('删除成功')
      // 释放
      db.close()
    })
  })
})

app.get('/', function(req, res){
  var obj = {
    msg: '渲染模板'
  }
  ejs.renderFile('views/index.ejs', obj, (err, data)=>{
    if (err) {
      console.log(err)
    }
    res.send(data)
  })
  // res.end('index')
})


app.get('/login', function(req, res){
  console.log('login')
  ejs.renderFile('views/form.ejs', {}, (err, data)=>{
    console.log(data)
    res.send(data)
  })
  res.end('login')
})

// console.log(app)
app.get('/register', function(req, res){
  console.log('register')
  res.send('register')
})

app.post('/dologin', (req, res)=>{
  console.log(req.body)
  res.send('dologin')
})