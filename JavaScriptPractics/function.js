// Block Code
function add(a, b){
   return a+b
}

let sum = add(2,3)
console.log(sum);

// Do not have name => Anyonymous function - Function expression

let sumOfIntegre = function(a,b){
    return a+b
}

console.log(sumOfIntegre(3,4));

// declare function using Fat Pipe (or) Fat Arrow

let sumOfNumber= (a,b) => a+b;
console.log(sumOfNumber(5,6))