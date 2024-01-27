const fs = require('fs')

console.log('Starting')

let data = fs.readFileSync('Asynchronous_JS\\File1.txt')
console.log(`File data : ${data}`)

console.log('Ending')