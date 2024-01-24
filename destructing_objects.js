// destructing an Array
array = [12, ,'hello',23, 'dadada']
var [a,b,c,d,e,f] =  array
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log()

// destructing an object

myObj = {naam: 'Abhishek',
aayu: 21,
qualification : 'UG'
}

//var [g,h,i,j] = myObj //will throw an error

var {g,h,i,j} = myObj // will create undefined variables

console.log(g)
console.log()

var {aayu,naam,a,qualification} = myObj //name of variable should be same as key of object
console.log(naam)
console.log(aayu)
console.log(qualification)
console.log()

var {aayu:a, naam:n, qualification:q} = myObj // to rename the variables
console.log(naam)
console.log(aayu)
console.log(qualification)
console.log(n)
console.log(a)
console.log(q)