// lessom about global scope and locale scope
//global scope
//locale scope

const  Scopeglobal = 1

function teste (){
    //locale of scope
    const b = 20
    //this other scope stay stuck here 
    function Otherteste() {
     const var1 = 10
     console.log(b, var1)
    }
    Otherteste()
}

teste()