
// this is lesson about value is refered!!
let valor = {nome:'Prog-18', age:27}

let Othervalor = valor

Othervalor.age = 100

console.log(Othervalor)


let aluno = {luno:'programmer', idade:50}

// this happened because in javascript all that turn inside object B serve to reffered to object A


let twicealuno = aluno
twicealuno.idade = 30

console.log(twicealuno)