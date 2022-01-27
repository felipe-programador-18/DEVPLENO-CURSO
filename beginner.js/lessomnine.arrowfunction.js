//arrow functions!!

const Tell = function(vocabulary){
    console.log(vocabulary)
}

Tell('Learning little')

const adding = function(n1, n2){
    return n1 + n2
}

//yet is more easy compleind
const Together = (n1, n2) => n1 + n2

console.log(Together(1,5))


//observar this!!
//i can make one function without adding name
const animal =  (nome, granido) =>  nome+ ' ' +granido()
console.log(animal('aligator', ()=> 'morder'))



const Unemployment = (n3 , n4) => n3 * n4
console.log(Unemployment(1444,123))