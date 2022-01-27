//practice about filter map and reduce
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





// doing and doing more and more
const Vetor = [1,2,3,5,6,1,3,45,6,7,23]
const Due = (mother ,son) =>{
    if(!mother[son]){
        mother[son] = {
            father : son,
            vo : 0
        }
    }
    mother[son].vo  = mother [son].vo + 1
    return mother
}

//remember about Command objectkeys!!!

const Family = Vetor.reduce(Due, {})
const Mall = Object.keys(Family)

const Equal = Mall.filter(Mall => Family[Mall].vo ===1)
const Observe = Equal.map (son => Family[son].father)

console.log(Observe)