//2) Qual o resultado?
var a = 1;
function someFunction(number) {
  function otherFunction(input) {
    return a
  }
  a = 5
  return otherFunction;
}
var firstResult = someFunction(9)
var result = firstResult(2)
console.log(firstResult)
console.log(result)
console.log('a',a)



//issues three!!
//3) Qual o resultado? Explique sua resposta.
var fullname = 'Tulio Faria'
var obj = {
  fullname: 'Jose Silva',
  prop: {
    fullname: 'Nome Sobrenome',
    getFullname: function() {
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname())
var test = obj.prop.getFullname
console.log(test())




// resolve issues four
//4) O que sairá no console neste exemplo a seguir:
var e = 1
function c() {
  e = 10
  return;
  function e() {}
}
c()
console.log(e)