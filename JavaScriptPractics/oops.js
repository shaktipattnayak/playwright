export default class Person {
    age = 25
    get location() {
        return "Canada"
    }
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
        console.log(this.firstName+ " " +this.lastName)
    }
}

// let person = new Person("Tim", "Joe")
// let person1 = new Person("Ayansh", "Pattnayak")
// console.log(person.age)
// console.log(person.location)
// person.fullName()
// person1.fullName()

// //Constructor is a method which execute by default when you create object of the class