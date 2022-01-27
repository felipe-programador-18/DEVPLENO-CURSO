// trading little

const vetor = [12,12,32,12,2,1,23,1,2,3,4,]
const Caught = (pai, filho) => {
    if(!pai[filho]){
        pai[filho] =0
    }

    pai[filho] += pai [filho] + 1
    return pai
}

const Together = vetor.reduce(Caught,{})
console.log(Together)


//try again thought about this !!!


const Moresure = ['martins', 'stoff', 'stuff','still', 'stuff','still']
const Sure = (Mother,mae) => {
   if (!Mother[mae]){
       Mother[mae] = 0
   }
   Mother[mae] += Mother[mae] + 1
   return Mother
}

const Union = Moresure.reduce(Sure, {})
console.log(Union)