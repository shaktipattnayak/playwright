// Block of code
// Var Global level/Function level
// Let Global level/Block level
// Const - it is constant once initialise cann't be change the value

// Using Let
let greet ="Good Evening"

if (1 == 1){
    let greet = "Good Afternoon"
}

function hello(){
    let greet = "Good Morning"
}

console.log(greet)


// Using var
var greeting ="Good Evening"

if (2 == 2){
    var greeting = "Good Afternoon"
}

function helloMr(){
    var greeting = "Good Morning"
}

console.log(greeting)

// const

const abc = 123
console.log(abc)
// abc = 234 // TypeError: Assignment to constant variable.
// console.log(abc)