//passando refferal in the function!!!

const caught = (num1, num2) => num1 + num2
const together = (caught(5000,323123))

console.log(together)

let more = 323123.32323
console.log(more.toFixed(2))


const kinda = [32,321,5,45,6,7,32,76,234,6]

const mother = kinda.map(function(item){
 
    return item % 2 ===1
})

console.log(kinda,"here had modify between array and functions!!!", mother)