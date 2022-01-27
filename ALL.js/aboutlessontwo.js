const fs = require ('fs')

fs.readFile ('chocolate.js',(err,data) =>{
   fs.writeFile('chocolatinho-copy.js',data, (err) => {
       console.log('arquive copy')
   })
})