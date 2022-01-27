const Scrining = function(item) {
   return item < 20
}

const neighboad = [1,2,3,4,5,632,321,10,12,21].filter(Scrining)
console.log(neighboad)


module.exports={
   Scrining
}