var fs = require('fs')

function getData (callback) {
  fs.readFile('mock.json', 'utf8', (err,data) => {
    if (err) {
      console.log(err)
      return
    }
    // return data
    callback(data)
  })
}

getData(function(data){
  console.log(data)
})

