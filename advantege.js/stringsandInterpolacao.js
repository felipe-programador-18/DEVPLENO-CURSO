// strings and interpolação de strings!!!

const name = 'martins'
// the command splint he breaking the words in various piece!!
console.log(name.split(' '))

const Sobrename = 'Felipe Programer'
console.log(Sobrename.split(' ').join(' <==> '))

const age = 26

//interpolação of Strings
// String Multilinea!!!
const Text = `fdafdfa
fadfafdaff
adfadfdafdaf
Nome: ${Sobrename}
adfadfdafdaf
1+1+2: ${1+1+2 + age}`

console.log(Text)


const Soma = (a,b) => a+b
console.log(Soma(32,1))

const Felling = `more
reinrianr
fnaidfndoinf number: ${Soma(12,321)}`

console.log(Felling)



/*const Unenployment = 'martins machado martins'
console.log(Unenployment.split(' ').filter(tough))
console.log(Unenployment)
*/
const tough = function(item){
     return item == 'martins'
}

const Unenployment = 'martins machado martins'
console.log(Unenployment.split(' ').filter(tough))
console.log(Unenployment)
const vetor = ['martins','machado','veronica'].filter(tough)
console.log(vetor)


let nome = `more and sure widespread in the carrer offert fectures
${323+32} incredible ${32323+23232}`
console.log(nome)



