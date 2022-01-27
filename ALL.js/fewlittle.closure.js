//practice about closure
// this get one functoin in turned can adding more of one value is very poweful in 
//javascript
function Remenber (getstarted){
    let receive = getstarted

    return function(){
      receive ++
      return receive
    }

}

const remeberone = (Remenber(10))
const remebertwo = (Remenber(21))

console.log(remeberone(), remebertwo())
console.log(remeberone())

//more other example closure!!!

function enviroment (animal){
    let count =  0

    return{
        getocunt: function(){
            return count
        },
        getadding: function(){
           return count ++
        },
        getname: function(){
             return animal
        }
    }
}

const Sniker = enviroment('sniker')
Sniker.getadding()
console.log(Sniker.getocunt(),Sniker.getname())

const lion = enviroment('leao')
lion.getadding()
console.log(lion.getocunt(), lion.getname())



const Called = (nome, sobrenome) => nome + sobrenome

console.log(Called('martins',' FELIPE'))


const vetor = [1,2,32,32,123,123,]

const Parents = (paione, paitwo) => paione+ paitwo
console.log(vetor.reduce(Parents))