const Vetor = [1,2,3,4,5]
const Receive = (value, index, arr) =>{
    console.log(value,index,arr)
}
Vetor.forEach(Receive)

const Thought = ['martins','arrives','amass','assay']
const Together = (value,index,arr) =>{
  console.log(value,index, arr)
}
Thought.filter(Together)


const Kinda = [200,300,400,500,200]
const Union = (value, index, arr) =>{
    console.log(value, index, arr)
}
Kinda.forEach(Union)

//here i copied!! practice about this
//Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. 
const  multiplicar = (a,b) => a*b
const duble = num => multiplicar(num,2)
const val = duble(10)
console.log(val)

const vezes =  (a,b) => a*b
const scare = two => vezes (two, 2)
const gained = scare(300)
console.log(gained)

const divide = (f,g) => f /g
const take = numeros => divide (numeros,5)
const name = take(100)
console.log(name)


//try little now!!

const Still = (x,z) => x ** z
const Stuff = paint => Still (paint, 3) 
const afraid = Stuff(30)
console.log(afraid)


const Pensando = [2,123,32,2,1,23,]
const Pend = Pensando.map(function(item){
  return {microwave: item *2 , normal: item}
})

console.log(Pensando, Pend)