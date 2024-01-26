person1 = {
    name : 'Abhishek',
    caste : 'Negi',
    age : 21,

    print_details : function(){
        console.log(`Name : ${this.name} , Caste : ${this.caste}, Age : ${this.age}`)
    }
}

person2 = {
    name : 'Abhi',
    caste : 'Negi',
    age : 23
}

//using call method we can use methods of any other objects or can use another functions 

//using call method on method of another object
person1.print_details.call(person2)

let print_details1 = function(){
    console.log(`Name : ${this.name} , Caste : ${this.caste}, Age : ${this.age}`)
}

//Using call methon on another function
print_details1.call(person2)

let print_details2 = function(city){
    console.log(`Name : ${this.name} , Caste : ${this.caste}, Age : ${this.age}, City : ${city}`)
}
print_details2.call(person2, 'Dehradun')
console.log()

// apply method
// apply method works same as call method
// only difference is it take arguments inside an array
person1.print_details.apply(person2)
print_details1.apply(person2)
print_details2.apply(person2, ['Dehradun'])
console.log()

// bind method
// bind method instead of calling , it store the the method or a function

let func1 = person1.print_details.bind(person2)
let func2 = print_details1.bind(person2)
let func3 = print_details2.bind(person2, "Dehradun")
console.log(func1)
console.log(func2)
console.log(func3)
console.log()

func1()
func2()
func3()