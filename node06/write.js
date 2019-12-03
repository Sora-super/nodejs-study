var fs = require('fs')

var txt = '湖上风来波浩渺。秋已暮、红稀香少。水光山色与人亲，说不尽、无穷好。\n莲子已成荷叶老。青露洗、蘋花汀草。眠沙鸥鹭不回头，似也恨、人归早。'
/**
 * 创建写入流
 * 文件没有，会自动创建
*/
var writeStream = fs.createWriteStream('write.txt')

writeStream.write(txt, 'utf8')

/**
 * 标记写入完成，触发finish回调
*/
writeStream.end()

// 写入完成
writeStream.on('finish', () => {
  console.log('写入完成')
})

// 写入失败
writeStream.on('error', (err) => {
  console.log(err)
})