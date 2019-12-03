var fs = require('fs')

/**
 * 流的方式读取文件
 * 文件过大，会读取多次
*/

var stream = fs.createReadStream('fs.txt')

var str = ''
// 读取
stream.on('data', (chunk)=>{
  str += chunk
})

// 读取完成
stream.on('end', (chunk) => {
  console.log(str)
})


// 读取失败
stream.on('error', (err) => {
  console.log('读取失败' + err)
})