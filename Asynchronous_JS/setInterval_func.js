// setInterval sets a time that after this much time specific function can be executed again
 // its is a asyncronous function
console.log("start")

function greet(){
    console.log("hello")

}

console.log("middle")

//setInterval(greet, 1000) // it will execute infinitely

//to set a stop time
let timer = setInterval(greet, 1000)
setTimeout(function(){
    clearInterval(timer)
},5000)

console.log("end")