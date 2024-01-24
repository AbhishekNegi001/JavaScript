let arr = [
    {name:'A', age: 12, gender:'M'},
    {name:'B', age: 22, gender:'M'},
    {name:'C', age: 14, gender:'F'},
    {name:'D', age: 34, gender:'M'},
    {name:'E', age: 54, gender:'M'},
    {name:'F', age: 25, gender:'F'},
    {name:'G', age: 75, gender:'F'},
]
console.log(arr)
console.log()

// AGE OF ALL MALE 

// STEP1 : identify all males
let males = arr.filter(function(element){
    return element['gender']=='M'
})
console.log(males)
console.log()

// STEP2 : Now take the ages of males
let ages = males.map(element=>{
    return element['age']
})
console.log(ages)
console.log()

//  USING METHOD CHAINING
ages = arr.filter(function(element){
    return element['gender']=='M'
}).map(element=>{
    return element['age']
})
console.log(ages)
console.log()