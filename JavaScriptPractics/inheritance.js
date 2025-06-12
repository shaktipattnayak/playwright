import './oops.js'
import Person from './oops.js'


class Pet extends Person
{
    constructor(firstName, lastName){
        //call the parent class constructor
        super(firstName, lastName)
    }

    // get location(){
    //     return "Blue Cross"
    // }
}

let pet = new Pet('Tom', 'Jerry')

pet.fullName()
console.log(pet.location)