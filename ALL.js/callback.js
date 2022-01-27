//relearn about callback!!!

const fs = require('fs')

const more = 43
console.log(more)

fs.readdir('./', function (err,lista) {
    if(err){
     // console.log(err, here)
    }else{
        console.log(lista)
    }

})


fs.readdir('./', function (err, lista){
    console.log('verify of list', lista)
  })
