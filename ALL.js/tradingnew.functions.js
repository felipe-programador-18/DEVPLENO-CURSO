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



const referral = function(item){
    return item < 50
}

const createnew = [12,3,123,54,6,5,49,43,32].filter(referral)
console.log('teste array and filter!!!', createnew)

//make filter to people born below of year 2000
const Decade = function(born){
    return born < 2000 && born > 1975
}

let Vector = [1995,1996,1999,1976, 1920, 1930].filter(Decade)
console.log(Vector)