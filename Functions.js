//normal functions
function func1(){
    console.log("Normal Function")
}
let func2 = function(a){
    console.log("Function as a expression "+ a)
}

let func3 = (a,b)=>{
    console.log("Arrow Function " + a+b)
}

//for a single argument it can be written as : a => {}
let func4 = a => console.log("Arrow function for single argument and single statement inside")

func1() // normal function
func2(2) //function as a expression
func3(1,2) // Arrow function
func4(4)