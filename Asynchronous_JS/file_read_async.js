const fs = require('fs')
const { callbackify } = require('util')

console.log('Starting')


// In async file read, callback function is must defined with two parameters one for err, another for data
let data1 = fs.readFile('Asynchronous_JS\\File1.txt', callback_func1) //Asyncronous file read
function callback_func1(err, data1){
    if(err){
        console.log(err)
    }
    console.log(`File data : ${data1}`)
    console.log()
}

let data2= fs.readFile('Asynchronous_JS\\File2.txt', callback_func2) //Asyncronous file read
function callback_func2(err, data2){
    if(err){
        console.log(err)
    }
    console.log(`File data : ${data2}`)
    console.log()
}

let data3= fs.readFile('Asynchronous_JS\\File3.txt', callback_func3) //Asyncronous file read
function callback_func3(err, data3){
    if(err){
        console.log(err)
    }
    console.log(`File data : ${data3}`)
    console.log()
}

console.log('Ending')