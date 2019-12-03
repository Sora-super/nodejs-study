var fs = require('fs')
var events = require('events')

var EventEmitter = new events.EventEmitter()

// 监听
EventEmitter.on('send', (data)=>{
  console.log(data)
})

function getData () {
  fs.readFile('mock.json', 'utf8', (err,data) => {
    if (err) {
      console.log(err)
      return
    }
    // 发送数据
    EventEmitter.emit('send', data)
  })
}

getData()
// console.log(events)
