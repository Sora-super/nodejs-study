

fetch('../json/index.json').then((res)=>{
  return res.json()
}).then((result)=>{
  var str = ''

  for (var i of result.a) {
    str += `<li>${i}</li>`
  }

  document.getElementById('ul').innerHTML = str
})

