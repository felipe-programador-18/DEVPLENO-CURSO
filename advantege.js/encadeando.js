//lesson about encadeamento de promiss


const fs = require('fs')

const readFile = (file) => {
   return new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if(err){
            reject(err)
        }else{
            resolve(contents.toString())
        }
    })
   })
}

const writeFile = (file, contents) => {
    return new Promise((resolve, reject) => {
        fs.writefFile(file, contents, (err) => {
        if(err){
            reject(err)
        }else{
            resolve()
        }
        })
    })
}


readFile('encadeando.js')
.then((contents) => writeFile('more.js', contents))