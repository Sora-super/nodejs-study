var fs = require('fs')


/**
 * Q: 什么是非阻塞IO？
 * A: 非阻塞IO的目的是高并发，非阻塞调用指在不能立刻得到结果之前，该调用不会阻塞当前线程。
 * 
*/
console.log(1)
fs.readFile('mock.json', 'utf8', (err,data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(2)
  console.log(data)
  console.log(3)

})
console.log(4)