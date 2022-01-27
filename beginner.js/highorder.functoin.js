//high order functoin!!

//HOF FUNCTION that recive other functions

const due =  [12,12,30,27]

const Double = valor => valor + 2
const Unique =valor => valor % 2 === 0
const Equal = (one,two) => one+two

const adding = due
.filter(Unique)
.map( Double)
.reduce(Equal,0)


console.log(adding)





const receive = function(item){
      return item %2 === 1 

}
const mother = [1,2,313,21,12,24].filter(receive)
console.log(mother)