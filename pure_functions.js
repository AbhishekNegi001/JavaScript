// pure functions are the functions which give same output for same input
// they don't depend on any external factors (functions, variables other than arguments)

// impure functions having external factors : var n and function console.log()
var n = 0
function impure_func(a){
    console.log(a+n);
    n++;
}

// pure function only performs the task it is expected to.
function pure_func(a){
    return a
}

impure_func(2)
impure_func(2)
impure_func(2)
console.log()

var m = 0
var x = pure_func(2) + m++
console.log(pure_func(2) + ' ' + x)
var y = pure_func(2) + m++
console.log(pure_func(2) + ' ' + y)
var z = pure_func(2) + m++
console.log(pure_func(2) + ' ' + z)
