const Soma = function(a,b,c){
    return a*b*c
} 

console.log(Soma(1,50,300))

// practice about MAP!!
const Vetor = [1,2,3,4,5,6]
const Double = Vetor.map(function(item){
    return {duplicate:item * 2, stardard: Vetor}
})
console.log(Vetor, Double)


// here i practice uses map
const arrey = [20,30,40,50]
const issues = arrey.map(function (item){
    return item * 2
})
console.log(arrey, issues)
// i creating one function and reuse in the code up, to practice REDUCE.
const Green = ( testeitem , itemtwo ) => testeitem + itemtwo
console.log(arrey.reduce(Green ))


//i are remenber how use Json!!
const Name = {
    name: 'MARTINS',
    sobrenome: 'machado',
    age: 26
}
console.log(JSON.stringify(Name))


// practice about function
const Twoname = function (a,b){
    return a + b
}
console.log(Twoname ('Bassi', ' \nVeronica'))


// here create one function to somar first item 1 later item two
const Apende = [100,200,400,500,600]
const Receive = Apende.map(function(item){
    return  { vezes: item * 2  + item *2}
    
})
console.log(Apende, Receive)

const reduce = ( testone , testtwo ) => testone + testtwo
console.log(Apende.reduce(reduce))


const Studies =  ['Felipe \n', 'Matheus\n', 'Paulo\n', 'Vírginia\n']
const Sobrename = (newSobrename, oldSobrename) =>  newSobrename  + oldSobrename

console.log(Studies.reduce(Sobrename))

// practice again and  try reduce !!!
const Union = [5,4,3,2,1]
const Force = (Forceone, Forcetwo) => Forceone + Forcetwo
console.log(Union.reduce(Force))


//practice Filter now!!!
// the command Filter he filter one vetor and transform in other vetor!!

const avoid = function ( value){
    return value <= 20
}
const Treyonde = [12,3323,343,4,12,4,6].filter(avoid)
console.log(Treyonde)

// reduce inside filter!!
const Caught = (Caughtone , Caughttwo) => Caughtone + Caughttwo
console.log(Treyonde.reduce(Caught))

// try again together map with reduce
console.log(Treyonde.map(Caught))
const showcase = function (a){
   return a
}
console.log(('martins'))



//this object key!!
const Called = {
    a: 'martins',
    b: 'antonio',
    c: 200,
    d: true
}
console.log(Object.keys(Called))

const Vacation = function(item){
    return item <= 6
}
 const Butt = [1,2,3,4,5,5,9,8,7].filter(Vacation)
 
 console.log(Object.keys(Butt))

// map !!
 const Remenber = [12,213,12123,123,12,23]
 const Ambixus = Remenber.map(function(item){
     return { recebe: item *2  }
    

 })
 console.log(Remenber,' seeing someone different',Ambixus)

 

// reduce soma os valores
const Marti = [1,23,545,6,43,32,50]
const Machado = (machadoone, machadotwo) => machadoone + machadotwo
console.log(Marti.reduce(Machado))

//i forgoti don't can forgot command's !!
const Scare = function(value){
    return value < 30
}

const Menos = [20,30,40,50,23,12,11,323,2,1].filter(Scare)
console.log(Menos)

const Verify = function(value){
    return value <= 10
}

const Pega = [1,2,3,44,55,2,1,3,88,9].filter(Verify)
console.log(Pega)

//3) Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.
//other jeito filter
const Cadeia = [1,3,43,22,33,44,66,99]
const Isimpar = one => one % 2 === 1
const Impar = Cadeia.filter(Isimpar)
// redece again
const Feel= (felling, fellinge) => felling + fellinge
console.log('here only impares', Impar.reduce(Feel,0))


// filter and reduce other way
const Conserning = [1,22,1233,23,22,44,66,77,88,99,100]
const Ispar = three => three %2 ===1
const Unica = Conserning.filter(Ispar)
// reduce againg
const Chopolin = (chapo, chapoone) => chapo + chapoone
console.log('verify this function, but i hava that often more and more',Unica.reduce(Chopolin,0))




const Test = (a,b,c) => a+b+c
const Resole = (op, a,b,c) => op(a,b,c)

const Reps = op => {
 const Regard = {
     '+': Test
 }   
 return Regard[op]
}

const K = Test(100,200,30)
console.log('the result is ',K)



const Mine = function(item){
    return  item < 5000
}
const Partn = [1,2,3,43,43,4234,343214,34234,4234].filter(Mine)
console.log(Partn)
