//lessom about closure

function  func1 (initial) {

    let contador = initial

    return function (){
        contador ++
        return contador
    }
}

const func = func1(10)
const funcb = func1(20)
console.log(func())
console.log(func())
console.log(funcb(), funcb(), func(), funcb())

function animal (name) {
    let count = 0
    return {
        getCount: function (){
            return count
        },
        increment: function (){
            count ++
        }, 
        getname : function (){
            return name

        }
    }
}

const gato = animal('gato')
gato.increment()
console.log(gato.getCount(), gato.getname())
console.log(gato.getCount(), gato.getname())

const dog = animal('cachorro')
dog.increment()
console.log(dog.getCount(), dog.getname())


// Practice about closure
function Though(again){
    let more= again
     
    return function (){
        more ++
        return more
    }

}

const Together = Though(5)
console.log(Together(),Together())

function Brand (trademarks) {
    let brands =  0
   return {
       getCought: function(){
            return brands
       },
       addingmore: function(){
           return  brands ++
       },
       namebrands: function (){
         return trademarks
       } 
   }
}

const Receive = Brand('addidas')
Receive.addingmore()
console.log(Receive.getCought(), Receive.namebrands())

const Nike = Brand('nike')
Nike.addingmore()
console.log(Nike.getCought(), Nike.namebrands())

const Puma = Brand('Puma')
Puma.addingmore()
console.log(Puma.getCought(), Puma.namebrands())



function Meal(dinner) {
    let Might = 0

    return {
        getMight: function(){
           return  Might
        },
        getaddingtwo: function(){
            return Might ++
        },
        getinvoices: function(){
           return dinner
        }
    } 
}

const Splint = Meal('feijao')
Splint.getaddingtwo()
console.log(Splint.getMight(), Splint.getinvoices())