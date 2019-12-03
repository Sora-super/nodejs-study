var fs = require('fs')


/**
 * fs.stat // 检测文件是否存在
 * 
*/

// fs.stat('css', (error, data)=> {
//   if (error) {
//     console.log(error)
//     return false
//   } 
//   console.log(`文件${data.isFile()}`)
//   console.log(`目录${data.isDirectory()}`)

// })

/**
 * fs.mkdir // 创建目录
*/

// fs.mkdir('image', (error)=>{
//   if (error) {
//     console.log(error)
//     return false
//   }
//   console.log('创建成功')
// })

/**
 * fs.writeFile // 写入文件
 * 不是添加，是覆盖
*/

// fs.writeFile('write.txt', '写入文件', (err) => {
//   if (err) {
//     console.log(err)
//     return false
//   }
//   console.log('文件写入成功')
// })


/**
 * fs.appendFile // 追加文件
*/

// fs.appendFile('write.txt', '，追加的数据啊', (err)=>{
//   if (err) {
//     console.log(err)
//     return false
//   }
//   console.log('追加成功')
// })

/**
 * fs.readFile // 读取文件
*/

// fs.readFile('index.html', 'utf8', (err, data)=> {
//   if (err) {
//     console.log(err)
//     return false
//   }
//   // console.log(data)
// })


/**
 * fs.readdir // 读取目录
*/

// fs.readdir('html', (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(data)
// })

/**
 * fs.rename // 修改文件名 and 剪切操作
 * 
*/

// fs.rename('test01.js', 'test.js', (err)=>{
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('重命名成功')
// })

// fs.rename('html/index.css', 'html/css/index.css', (err) =>{
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('文件剪切成功')
// })

/**
 * fs.rmdir // 删除目录
*/

// fs.rmdir('a', (err)=>{
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('目录删除成功')
// })


/**
 * fs.unlink // 删除文件
*/

// fs.unlink('a.txt', (err) =>{
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('文件删除成功')
// })