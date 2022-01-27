const mother = function(item){
    return item < 10
}

const vetor = [1,2,2,1,21,3,23,21].filter(mother)
console.log(vetor)

const avoid = [400,32,321,323,23,156]
const eagers = avoid.map(function(item){
    return item * 2
})

console.log(avoid,eagers)


const Pating = [5,9]
const Receive = (Receiveone, Receivetwo) => (Receiveone + Receivetwo) /2
console.log(Pating.reduce(Receive))


const Fell = ['a','b','c','d','e']
Fell.forEach(Element => console.log(Element, Fell))


const warmer = ["more","due","ensure","thought","restroom"]

warmer.forEach(Element => console.log(Element,warmer) )