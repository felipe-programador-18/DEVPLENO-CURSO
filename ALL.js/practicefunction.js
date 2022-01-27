// remember and practice about functions!!
const Double = (a,b) => a ** b
const Douop = (op, a,b) => op (a,b)

const Signal = op => {
    const Caught = {
        '**':Double
    }
    return Caught[op]
}
const More = Double(100,2)
console.log(More)
if(Double <= 9999){
    console.log('results invaluable', Double)
}else{
    console.log('ok')
}

// remenber someone thing's

const Calculator = (num1, op, num2)=>{
   if (op === '+'){
      return  num1 + num2
 } if (op === '-'){
     return num1- num2
 } if (op === '*'){
     return num1 * num2
 }if (op === '/'){
    return num1 / num2
 }

}

console.log(Calculator(10, "*"  ,20))

//doing other way

const Calculatorfn = (elem1,operation ,eleme2,) => operation(elem1,eleme2)
const Together = (elem1, eleme2) => elem1 * eleme2

console.log(Calculatorfn(20,Together,30))


//other issues to resolve
//4) Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor

const Receve = [1,2,3,4,5,12,3,4,5,6,2,3,4]

const Howmanytimes = (one, two) => {
    if (!one[two]){
        one[two]= 0
    }
    console.log(one,two)
    one [two] = one[two]+ 1
    return one
}

const Putt = Receve.reduce(Howmanytimes, {})
console.log(Putt)


//make againg!!

const Names = ['Felipe', 'martins', 'martins','internacional', 'felipe', 'internacional']

const Pense = (pai, filho) =>{
    if(!pai[filho]){
        pai[filho]= 0
    }
   // console.log(pai,filho)
    pai[filho] = pai[filho] + 1
    return pai
}

const Family = Names.reduce(Pense, {})
console.log(Family)



const Kinda = function(item){
    return item <20
}

const Kindmore = [22,23,24,21,213,1,2,3,4,56,].filter(Kinda)

console.log(Kindmore)


const engagement  = [12,21,32,123,123,123,123,12]
const wants = (wantsmroeone, wantsmoretwo)=> wantsmroeone + wantsmoretwo
console.log(engagement.reduce(wants))



//doing one function that recebe other function!!
//this paremeter recebe two function!!!
const Moreissues = (eleone, operation, eletwo) => operation(eleone, eletwo)
const Operando = (eleone, eletwo) => eleone * eletwo
console.log(Moreissues(200, Operando, 1000))




//relearning about other issues

const Modher = [2,1,2]
const Sogra = (girlfriend, namorada)=>{
if(!girlfriend[namorada]){
    girlfriend[namorada]= 0
}
girlfriend[namorada] += girlfriend[namorada] + 1
return girlfriend
}
const Both = Modher.reduce(Sogra,{})
console.log(Both)
