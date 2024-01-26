function car(name, company, color){
    this.name = name
    this.company = company
    this.color = color

    //method
    this.mycar = function(){
        console.log(`${name} is my car`)
    }

    function func(){
        console.log("class function")
    }
}

let car1 = new car('scorpio','mahindra','black')

let car2 = new car('s-class','mercedes','white')

console.log(car1)
console.log(car2)

car1.mycar()
car2.mycar()