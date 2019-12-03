var fs = require('fs')
function getSuffixName (url) {
  /**
   * 默认异步，加上Sync 表示同步
  */
  // fs.readFile('model/mime.json', 'utf8', (err, data)=> {
  //   if (err) {
  //     console.log(err)
  //     return
  //   }
  //   // console.log(data)
  //   var result = JSON.parse(data)
  //   for (var i in result) {
  //     if (i == url) {
  //       return result[i]
  //     }
  //   }
  // })
  var data = fs.readFileSync('model/mime.json')
  var result = JSON.parse(data)
  for (var i in result) {
    if (i == url) {
      return result[i]
    }
  }
  // 给个默认返回
  return 'text/html'
}

exports.getSuffixName = getSuffixName