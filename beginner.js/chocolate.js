// try little today

const Receive = function(item){
    return item <=100 
}
const Vetor = [200, 18,30,40].filter(Receive)

console.log(Vetor)


const multiplic = (a,b) => a *b
const Resultade = (op, a,b) => op(a,b)
const RetornaOps = op=> {
    const Sinais = {
    
        '*': multiplic
    }

     return Sinais[op]    
}

const seeing = multiplic (10,50)
console.log(seeing)


















const Mais = (c,d) => c + d
const Pega = (mm, c,d) => mm (c,d)

const Superpega = mm => {
    const Together= {
        "+": mm
    }
    return Together[mm]
}

const horever = Mais(123,80)
console.log(horever)

const Martins = [12,23,2,123,123,2333]
const Two = Martins.map(function(item){
    return {wants: item * item}
})
console.log(Two)

const Produce = [12,323,12312,3123213,213]
const Fem = (Femile, Femileone) => Femile - Femileone
console.log(Produce.reduce(Fem))



const Chance = ['martins', 'machado', 12]
Chance.forEach(element => console.log(element))

const potato = ['martins', 'veronica','augusto','Felipe','vanessa']
potato.forEach(element => console.log(element))