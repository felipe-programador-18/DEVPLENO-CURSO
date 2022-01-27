//assincronismo Callback

const fs = require('fs')
//this example he always go executive the command of outside first and latter in the
//function callback later!!
console.log('inicio')


fs.readdir('./', function (err, lista){
    if(err){
      //  console.log(err, 'error here!!')
    }else{
        console.log(lista)  
    }
}) 

console.log('end')
console.log('threads advantage')




fs.readdir('./', function (err, lista){
  console.log('verify of list', lista)
})