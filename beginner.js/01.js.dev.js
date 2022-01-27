// good morning here has information about redece map Filter Foreat

const a = '10'
if(a === 10){
    console.log('teste' + a)
}else{
    console.log('this dont is value number')
}

const object = {
    name: 'felipe',
    sobrename: 'martins',
    age: '26 years'
}

console.log(object)



//test adding of ++

const Soma = function(a,b) {
    return a+b
}
console.log(Soma(100,12))

const Vezes = function (c,d,e){
    return c*d-e
}

console.log(Vezes(100,2,50))

//here i  doing a function that return the Vezes, an function inside other function.
const Calculator = function (op, c,d,e){
    return op (c,d,e)
}
console.log(Calculator(Vezes,100,60,3))



//use MAP !!!
const array = [1,2,3,4,5,6]
const Double = array.map(function (item){
    return  {original:item , triplicado :item *3 }
})
console.log(array, Double)

//arrow functions
const impares = item => item *3

const Onlyimpares = item => item % 2 ===1

const ImparesTriplicado = array.filter(Onlyimpares).map(impares)

console.log('Impares triplicado:' , ImparesTriplicado)

const Adopten = (amass, actuarity) => amass + actuarity
const Somatorio = ImparesTriplicado.reduce(Adopten,10)

console.log('somar com reduce :' + Somatorio)




//other example of MAP
const Vetor = ['more', 'insight']
const Misture = Vetor.map (function(item){
    return item + ' \n two more insights about the survey'
})

console.log(Vetor, Misture)



const Obj = {
    nome : 'martins',
    sobrenome : 'machado'
}

// practice map
const Nome = [10,20,3,4,50,60,55]
const attribute = Nome.map(function(item){
    return item + item * 2
})
// here with reduce
const Tohettahm = attribute.reduce(function(item){
    return item +2
})
console.log(Tohettahm)
console.log(Nome,attribute)

 
//reduce alone

const Felipe = [10,20,304,434,34]
const Outherfel = (Felipem, Felipemm) => Felipem * Felipemm
console.log(Felipe.reduce(Outherfel))

//test reduce in the names
const Interview = ['here', 'here','here']
const Reuniao = (Interviewrrr, Interviewaa) => Interviewrrr + Interviewaa
console.log(Interview.reduce(Reuniao))

//filter try againg
const Square = function(teste){
    return teste <= 50
}
const Squaresquad = [100,323,32,1,3,4,5,5,67,7,].filter(Square)
console.log(Squaresquad)

// practice alyays improve knowlegde

const Sure =  function(value){
     return value %2 ===0
}
const Surey = [10,20,22,33,44,55,77,91,101].filter(Sure)
console.log(Surey)

// map
const Sort = [2,4,5,6,78,9,1,5]
const Seventen = Sort.map(function(item){
    return {teste: item *2}
})
console.log(Sort,Seventen)

//together redece

const Spent = Sort.reduce(function(item){
    return item + 2
})
console.log(Spent, 'the command reduce he soma os index pelo dobro here 8 index and stay in with 16')

// here filter

const Paying = [1995,2001,1989,2005,1996,1997,1994]

const Bottle = function(Paying){
    return Paying >= 1997
}
console.log(Paying.filter(Bottle))


const NamesEqual = ['martins', 'augusto','cristina', 'programmer','igor']

const Teller = function(Teller){
    return Teller !== 'martins'
}
console.log(NamesEqual.filter(Teller))


// practice Foreach

const Fell = ['a','b','c','d','e']
Fell.forEach(Element => console.log(Element, Fell))


const Incresed = [1,2,3]
Incresed.forEach(element => console.log(element **20, Incresed))