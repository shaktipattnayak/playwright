import './oops.js'
import Person from './oops.js'

//object is collection of properties

let person = {
    firstName: 'Tim',
    lastName: 'Joe',
    fullName: function(){
        return this.firstName +this.lastName
    }
}

// person.firstName = "Tim Dane"
// person.gender = "male"
// console.log(person.lastName) //Frist way
// console.log(person['lastName']) //Second way
// console.log(person['firstName'])
// console.log(person.fullName())
// delete person.gender
// console.log(person)
// console.log('gender' in person)

// for (let key in person){
//     console.log(person[key])
// }

let obj1 = new Person("Shakti", "Pattnayak")
console.log(obj1.firstName)
console.log(obj1.lastName)
obj1.fullName()