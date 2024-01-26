//syntax in classes should be written in strict mode

class car{
    constructor(name, company, color){
        this.name = name
        this.company = company
        this.color = color
    }

    func = ()=>{
        console.log("Random Test")
    }
    //class method
    mycar() {
        console.log(`${this.name} is my car`)
    }
}

let car1 = new car('scorpio','mahindra','black')

let car2 = new car('s-class','mercedes','white')

console.log(car1)
console.log(car2)

car1.mycar()
car2.mycar()