// setTimeout always take two arguments one is callback function another is time
// setTimeout(cb, 1000) in milli seconds (1/1000 seconds)

console.log("start")

function greet(){
    console.log("hello")

}

console.log("middle")

setTimeout(greet, 3000) // its is a asyncronous function

console.log("end")