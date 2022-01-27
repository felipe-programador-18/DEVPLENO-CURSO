//1) Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.
//issues one
const More = [1,2,3,4,5,65,6,20]
const solve = (moreone, moretwo) => moreone + moretwo
console.log(More.reduce(solve))

//issues two
//2) Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.
//filter here now
const teste = [1,2,3,4,345,10,11]
const Recebe = function(Number){
    return  Number % 2 === 0;
}
console.log(teste.filter(Recebe))

// other example uses arrow functions!!
// filter other jeito of make
const Vetor = [10,20,343,3,4]
const Ehpeer = num => num % 2 === 0
const Peer = Vetor.filter(Ehpeer)
// seeing and practice quite times!!!!
// reduce now together
const Together = (togetherone, togethertwo) => togetherone + togethertwo
console.log('teste of only peer', Peer.reduce(Together,0))


//3) Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.
//other jeito filter
const Cadeia = [1,3,43,22,33,44,66,99]
const Isimpar = one => one % 2 === 1
const Impar = Cadeia.filter(Isimpar)
// redece again
const Feel= (felling, fellinge) => felling + fellinge
console.log('here only impares', Impar.reduce(Feel,0))



//4) Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor

const Repite = [1,2,3,4,5,2,1,3,4]
const Howmanytimes = (curr, val) => {
    if(!curr [val]){
       curr [val]= 0
    }
    console.log(curr,val)
    curr [val]= curr [val] + 1
    return curr   
}
const times = Repite.reduce( Howmanytimes, {})
console.log(times)

//Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor - aqueles que ocorrem apenas 1 vez dentro do vetor.
//- Dica 1: utilize reduce, filter e keys
//- Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício

//practice about this !!!
const Novo = [1,2,3,4,5,1,3,4,3,6,7, 'martins', 'martins', 'felipe martins']

const Atencao = (agr, value) => {
    if(!agr [value]){
        agr[value]= {
            val: value,
            ocurr: 0
        }
    }
    agr[value].ocurr = agr [value].ocurr + 1
    return agr
}
const Contagem = Novo.reduce(Atencao, {})
const Key= Object.keys(Contagem)


const Unique = Key.filter( key => Contagem[key].ocurr === 1)
const Volta = Unique.map(value => Contagem[value].val)
console.log(Volta)





const Adding = (a,b)=> a+b
const Diminui = (a,b) => a-b
const Multiplic = (a,b) => a *b
const Splint = (a,b) => a/b

const Resultade = (op, a,b) => op(a,b)

const RetornaOps = op=> {
    const Sinais = {
    
        '+': Adding,
        '-': Diminui,
        '*': Multiplic,
        '/': Splint
    }

     return Sinais[op]    
}

const  x = Multiplic(200,500)
console.log(x)
const Y = Diminui(13323,500)
console.log(Y)


//10) Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. Exemplo:
//10) Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. Exemplo:
//const calculadoraFn = (....) => ….
//calculadoraFn(10, soma, 20)


//solve the issues, for before seeing procedures

const Calculatorfn = (num1,operador, num2) => operador(num1, num2) 
const Tee = (num1, num2) => num1+num2
console.log(Calculatorfn(10,Tee,20))