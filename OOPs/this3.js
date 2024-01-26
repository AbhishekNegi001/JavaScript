//this keyword behaviour with browser in non-strict mode
/*
this keyword refers to the object that is executing current piece of code
*/
console.log(this) //browser or window object and its methods
console.log()

/*
if the function being referenced is a regular function,
then 'this' again references the window object
*/

function display_this(){
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
        console.log()
    }
}
obj.myfn()


/*
if the function being referenced is a function inside of a method of an object,
then 'this' again references the windows object
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