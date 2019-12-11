//保存图片
var fs = require('fs')
var https = require('https')
var obj = {
saveImage: function(url,path) {
  https.get(url,function (req,res) {
      var imgData = '';
      req.on('data',function (chunk) {
          imgData += chunk;
      })
      req.setEncoding('binary');
      req.on('end',function () {
          fs.writeFile(path,imgData,'binary',function (err) {
              if (err) {
                console.log(err) 
                return
              }
              console.log('保存图片成功'+path)
          })
      })
  })
},
  getUrl: function (html, catalo) {
    /**
     * fs.mkdir // 创建目录
    */
    var catalo = catalo || 'image'
    fs.stat(catalo, (error, data)=> {
      if (error) {
        fs.mkdir(catalo, (error)=>{
          if (error) {
            console.log(error)
            return false
          }
          console.log('文件夹创建成功')
        })
        return false
      } 

    })

    const str = html
    const imgReg = /<img.*?(?:>|\/>)/gi
    // 匹配src属性
    const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i // eslint-disable-line
    const imgArr = str.match(imgReg)
    const imgList = []
    for (let i = 0; i < imgArr.length; i++) {
      const src = imgArr[i].match(srcReg)
      // 获取图片地址
      if (src[1]) {
        if (src[1].indexOf('data:') == -1) {
          obj.saveImage(src[1], `${catalo}/${i}.png`)
        }
        imgList.push(src[1])
      }
    }
  }
}
module.exports = obj

