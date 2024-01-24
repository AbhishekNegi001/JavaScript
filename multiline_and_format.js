// for multiline string or for using format specifiers we use

//multiline strings

let txt1 = "firstline\
second line\
third line"

let txt2 = `firstline
second line
third line` 

console.log(txt1)
console.log()
console.log(txt2)
console.log()

var num = 10
console.log('number : ${num}')
//format specifer ` text : ${variable} `
console.log(`number : ${num}`)
