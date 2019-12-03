
var app = require('./models/router')
var http = require('http')
var ejs = require('ejs')
var MongoClient = require('mongodb').MongoClient

var DBurl = 'mongodb://localhost:27017/'

http.createServer(app).listen('8089')


console.log('server is running in 8089')

app.get('/add', (req,res)=>{
    MongoClient.connect(DBurl, (err, client)=>{
      if (err) throw err
      const db = client.db('article');
      const obj = {name: '张三', age: 17}
      db.collection('user').insertOne(obj, (error,result)=>{
        if (error) throw error
        res.send('数据添加成功')
        client.close()
      })
    })
})

app.get('/', (req, res)=>{
  MongoClient.connect(DBurl, (err, client)=>{
    if (err) throw err
    const db = client.db('article');
    db.collection('user').find({}).toArray((error,result)=>{
      if (error) throw error
      console.log(result)
      ejs.renderFile('views/index.ejs', {arr: result}, (err, data)=>{
        if (err) {
          console.log(err)
        }
        res.send(data)
      })
      client.close()
    })
  })

})

