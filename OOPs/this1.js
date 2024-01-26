//this keyword behaviour with nodejs in non-strict mode
/*
this keyword refers to the object that is executing current piece of code
*/
console.log(this) //empty object
console.log()

/*
if the function being referenced is a regular function,
then 'this' references the global object
*/
let name1 = 'Abhishek1'
function display_this(){
    console.log(this.name1)
    console.log(this.age)
    console.log(this)
    console.log()
}
display_this()

/*
if the function being referenced is the method in an object,
then 'this' references the object itself
*/
let obj = {
    name:'Abhishek',
    age:21,
    myfn: function(){
        console.log(this)
        console.log(this.name)
        console.log()
    }
}
obj.myfn()


/*
if the function being referenced is a function inside of a method of an object,
then 'this' references the global object
 */
let obj2 = {
    name:'Abhishek',
    age:21,
    myfn: function(){
        function func2(){
            console.log(this)
            console.log()
        }
        func2()
    }
}
obj2.myfn()