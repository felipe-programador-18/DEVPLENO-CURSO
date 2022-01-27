 

 //ecmacript > javascript > engine

 //mono-thread all roda nessa thread !!!
// funcional


//EVENTO LOOP


// type variable!!!
const b = {
    value:20
}

b.value = 30
console.log(b)

const a = {
    more : 440,
    thought : {
        bag: 20
    }
}

a.more =  450* 3

let stuff = a.thought.bag
console.log(stuff)


let vetor = [1,2,3,4,5,6,7]
console.log(vetor[1]
)


let Payingspent = function(func){
    func('here inside function')
}
let Moveup = Payingspent
Moveup(console.log)