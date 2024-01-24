//Higher Order Functions either receives the functions as an arguments or return functions as an output

//callback functions are the functions that are passed into the higher order fuction as arguments
//And higher order functions are the functions that receives those callback functions

arr = [1,2,3,4,5]
console.log(`Array : ${arr}`)
console.log()
//Using normal function
function square_array(arr){
    let sq_array = []
    for (let i=0;i<arr.length;i++){
        sq_array.push(arr[i]*arr[i])
    }
    return sq_array
}

let sq_array = square_array(arr)
console.log(sq_array)
console.log()

//Using higher order function, eliminating the loops and conditions

// map will loop through every element of your array and perform
// the specific operation that you have provided and will return you a new array
sq_array = arr.map(function(n){
    return n*n
})
console.log(sq_array)
console.log()

// foreach method
// foreach method doesnot returns a array or anything
sq_array = arr.forEach(element => {
    return element*element
});
console.log(sq_array)
console.log(arr)

arr.forEach(element => {
    console.log(element*element)
});
console.log()

// find function
// It returns the first element that satisfies the condition
let num = arr.find(element => {
    return element>2
});
console.log(num)
console.log()

// findIndex function
// It returns the index of first element that satisfies the condition
num = arr.findIndex(element => {
    return element>2
});
console.log(num)
console.log()

// some function
// it returns the true value even if 1 value meets the condition
num = arr.some(element => {
    return element>2
});
console.log(num)
console.log()

// every function
// it returns the true value all values meets the condition
num = arr.every(element => {
    return element>2
});
console.log(num)
console.log()

// filter method
// it loops through an array an check for specific condition
// it returns all those elements which satisfies the condition

num = arr.filter(element => {
    return element>2
});
console.log(num)
console.log()

// reduce method
// reduces our array to give an output based on some operation on its elements
// eg: if we want to add or multiply all elements of an array together

/*
// normal function

let sum = 0;
for(let i=0;i<arr.length;i++){
    sum += arr[i]
}
console.log(sum)
*/
//using reduce method for array sum
num = arr.reduce( (intial,value) => {
    return intial+value;
},0); // ,0 will act as accumulator which is intially assigned 0 and then will store the next updated sum
console.log(num)
console.log()

//using reduce method for array element multiplication
num = arr.reduce( (intial,value) => {
    return intial*value;

},1); // ,1 will act as accumulator which is intially assigned 0 and then will store the next updated sum
console.log(num)
console.log()