// inheritance - classical and polymorphic
// classsical - all the methods and properties are passed from base-class to derived-class

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    get_name(){
        console.log(this.name)
    }
    get_info(){
        console.log(this.name)
        console.log(this.age)
    }
}

class Teacher extends Person{
    constructor(name, age, class_assigned){
        super(name,age)
        this.class_assigned = class_assigned
    }

    get_info(){
        super.get_info()
        console.log(this.class_assigned)
    }
}

let person1 = new Person('Abhi', 19)

let teacher1 = new Teacher('Abhishek',21, 11)

console.log(person1)
console.log(teacher1)
console.log()

person1.get_name()
console.log()
person1.get_info()
console.log()

teacher1.get_name()
console.log()
teacher1.get_info()