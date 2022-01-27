//lesson about async await 
function tempo(ms){
    return new Promise((resolve, reject) =>{
     setTimeout(()=> resolve(ms), ms)
    })

}

 async function Grewts(){
 const ms = await tempo(2000)
 console.log('ended', ms)
}

console.log(Grewts())






