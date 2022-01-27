//3) A lista de arquivos retornado no exercício anterior, também retorna diretórios. Crie uma função que retorne todos os sub-diretórios em um vetor (deve-se ignorar os arquivos retornados pelo readdir).
const fs = require('fs')

const readdir = caminho => new Promise ((resolve, reject) => {
   fs.readdir(caminho, (err,files) => {
       if(err){
           reject(err)
       }else{
           resolve(files)
       }
   })
})

const stat = caminho =>  new Promise((resolve, reject) => {
    fs.stat(caminho, (err, stats) => {
      if(err){
          reject
      }else{
          resolve
      }
    })
})

const executive = async () => {
    const arquivos = await readdir ('./')
    const stats = await stat(arquivos[0])
    console.log(arquivos[0], stats.isDirectory())
}

executive()