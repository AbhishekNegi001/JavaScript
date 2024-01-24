// for in loop gives us the key or index of the iteratable

// for of loop gives us the values of the interatable
array = ['apple','banana','mango','orange']
dict = {
    name : 'Abhishek',
    caste : 'Negi',
    age : 21,
    graduate: true
}

for (var key in dict){
    console.log(value + ' ' + dict[key])
}
console.log()
/*
for (var value of dict){
    console.log(value + ' ' + dict[value])
}
console.log()
*/
for (var index in array){
    console.log(index)
}
console.log()

for (var value of array){
    console.log(value)
}
console.log()

for (var [index, value] of array.entries()){
    console.log(index + " " + value)
}