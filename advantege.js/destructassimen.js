//practice about desctruct assiment
// very equal useState!!!
const studies = {
    name:'martins',
    sobrenome:'felipe',
    city:'Porto alegre'
}

//here i make an function for give a parameter of object
const Caughtname = pessoal => {
    return pessoal.name
}


//test destruct assyment traning about this code!!
//const {name} = studies
console.log('>>', Caughtname(studies))

// very equal useState!!!
// very equal useState!!!
const CreatPerson = {
    nome: 'Felipe',
    sobrename: 'martins',
    stage: 'Porto alegre'
}
// very equal useState!!!
const keys = Object.keys(CreatPerson)
const [i1,i2] = keys
console.log(i1,i2,keys) 

console.log(keys)


const thoubleshoting = {
    brand: 'nike',
    brandone: 'addidas'
}

const {brand, brandone} = thoubleshoting
console.log(brand,brandone)




const Nike = {
    subrand:'nikemoreisngmore',
    brandnike:'supmore'
}

const {subrand, brandnike} = Nike
console.log(subrand)