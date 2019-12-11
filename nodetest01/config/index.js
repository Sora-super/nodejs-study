var url = [
  {"好看的头像": 'https://www.zhihu.com/question/356862224/answer/902775715'},
  {'手机壁纸':'https://www.zhihu.com/question/326221067/answer/728849155'}
]

var obj = {
  getCataName: function (index) {
    var index = index || 0
    let config = {}
    for (let x = 0; x<url.length; x++) {
      if (x == index) {
        for (var y in url[x]) {
          config.name = y
          config.url = url[x][y]
          return config
        }
      }
    }
  }
}


module.exports = obj