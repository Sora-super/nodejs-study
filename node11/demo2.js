var http = require('http')

var app = require('./models/router')

var ejs = require('ejs')

http.createServer(app).listen(3000)


// console.log(app)
app.get('/login', function(req, res){
  console.log('login')
  ejs.renderFile('views/form.ejs', {}, (err, data)=>{
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