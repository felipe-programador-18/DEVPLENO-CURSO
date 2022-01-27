const obj = {
    var1:10,

    get : function (){
     return this.var1
    }
}

console.log(obj.get.bind({var1: '70'}) ())



//this code turned in object in other obj using command bind
let thought = {
    var2: 20,

    struggling : function(){
        return this.var2
    }
}

console.log(thought.struggling.bind({var2:'50'}) ())


let sure = {
    var43: 'more issues about',

    spite:function(){
        return this.var43
    }
}
console.log(sure.spite.bind({var43:'thought about challange of my life'}) ())

// this practice is for seeing object turned in other values use in command bind!!

let outstanding = {
    var54 : 100,

    letmore: function(){
        return this.var54
    }
}

console.log(outstanding.letmore.bind({var54:'500'}) ())
