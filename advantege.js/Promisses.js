//lesson about Promisses
// this is much better doing which callback!!

function tempo(ms){
    return new Promise((resolve, reject) =>{
     setTimeout(resolve, ms)
    })

}

tempo(2000)
.then(()=> console.log('opa'))
.then(()=> console.log(12+12))
.then(()=> console.log(32+32))



setTimeout( () => {
    console.log('ola em 2 segundos...')
   }, 2)
  console.log(2)


setTimeout( () =>{
    console.log(10+2)
}, 5)



