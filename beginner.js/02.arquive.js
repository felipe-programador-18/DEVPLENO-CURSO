const fs = require('fs')

//was called callback  hell
/*
fs.readFile('02.assincronismo.js', (err, data)=>{
    fs.writeFile('02.assincronismo-copy.js', data, (err)=>{
        console.log('arquivo copaido')
    })
})
*/

//promises / callback

const readFile = path => new Promise ((resolve, reject)=>{
  fs.readFile(path,  (err, data) =>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
  })
})

const writeFile = (path, data) => new Promise((resolve, reject) =>{
    fs.writeFile(path, data, (err) => {
        if(err){
          reject(err)
        }else{
        resolve()
        }
    })
})

/*
readFile('02.assincronismo.js')
.then( data => writeFile('copia-promisse.js', data))
.then(() => console.log('arquivo copiado'))
.catch(err => console.log(err))
*/

//async await

const CopyFile = async() => {
  console.log('hi there async !')

  try {
  const data = await readFile('02.assincronismo.js')
  await writeFile ('copy-async-await.js', data)
  //console.log(String(data))
  console.log('arquivo read and write')
  } catch(err){
  console.log('error', err)
  }
}
CopyFile().then(() => console.log('ended of async'))