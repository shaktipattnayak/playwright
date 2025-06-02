const username = "John Doe";
const age = 30;
console.log("Hello " + username + ", you are " + age + " years old?");
console.log(`Hello ${username}, you are ${age} years old?`);

//Destructuring
const person = {
  namee: "John Doe",
  roll: 30,
  address: {
    city: "New York",
    state: "NY",
    zip: 10001,
  },
};

const { namee, roll, address: { city, state, zip } } = person;
console.log(namee, roll, city, state, zip);

console.log(typeof(person.address.zip));

let required = true;
let optional = false;
let defaultValue = "default value";
console.log(required);
console.log(optional);
console.log(typeof(defaultValue));