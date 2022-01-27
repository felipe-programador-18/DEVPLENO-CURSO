// Temporizadores
//test in the temporizadores

console.log(1)
setTimeout( () => {
  console.log('ola em 2 segundos...')
 }, 2)
console.log(2)


let Count = 0
let Interval = setInterval(() =>{
    console.log('executive for interval of time...')
    Count ++;
   if(Count > 5){
       clearInterval(Interval)
   }
}, 1000)
console.log(145)
let Interval2 = setInterval(() =>{
    console.log('Testando more one teste')
    Count ++;
   if(Count > 15){
       clearInterval(Interval2)
   }
}, 1500)