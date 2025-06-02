var marks = Array(6);
var marks = new Array(10, 20, 30, 40, 50, 60);
var marks = [10, 20, 30, 40, 50, 60];
// console.log(marks);
// console.log(marks[2]);
// console.log(marks.length);
// marks.push(70);
// console.log(marks);
// marks.pop();
// console.log(marks);
// marks.unshift(5);//Insert at the beginning
// console.log(marks);
// console.log(marks.indexOf(310));
// console.log(marks.includes(30));
// // console.log(marks.slice(2, 4));
// // console.log(marks.splice(2, 4));
// console.log(marks);
// console.log(marks.reverse());//Reverse
// console.log(marks.sort());//Sort
console.log("Sort in ascending order", marks.sort((a, b) => a - b));//Sort in ascending order
console.log("Sort in descending order", marks.sort((a, b) => b - a));//Sort in descending order
let sum = 0;
for(i=0; i<marks.length;i++){
    sum += marks[i]
}   
// console.log(sum);


//Array Functions Reduce, Map, Filter

var School_marks = [18, 21, 30, 40, 42, 39, 48];
console.log("School_marks >>>",School_marks);
//alculates the sum of all the elements of the array with using Reduce method.
sum = 0;
for(let i = 0; i<School_marks.length; i++){
    sum += School_marks[i];
}
console.log("Sum of all the elements of the array is: ", sum);

//The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//Reduce method takes a callback function as an argument, which is called for each element in the array
console.log(School_marks.reduce((sum,mark) => sum + mark, 0));

//Find all the even numbers from the array with using Filter method
for(let i =0; i<School_marks.length; i++){
    if(School_marks[i] %2 == 0){
        console.log("Even number is: ", School_marks[i]);
    }
}
//For example, if we have an array of numbers and we want to filter out all the even numbers, we can use the filter method
console.log(School_marks.filter((mark) => mark%2==0)); 


//Creates a new array with the results of calling a function for every array element without using Map method
//For example, if we have an array of numbers and we want to create a new array with the square of each number, we can use the map method
var marks_square = [];
for(let i =0; i<School_marks.length; i++){
    console.log("Square of the number is: ", School_marks[i]*School_marks[i]);
    marks_square.push(School_marks[i]*School_marks[i]);
}   
console.log("Square of the numbers is: ", marks_square);

// Explain the Map method
// The map method creates a new array with the results of calling a function for every array element.

//Creates a new array with the results of calling a function for every array element with using Map method
console.log(School_marks.map((mark) => mark*mark)); // For example, if we have an array of numbers and we want to create a new array with the square of each number, we can use the map method

//Use all three methods together
//For example, if we have an array of numbers and we want to create a new array with the square of each number and then filter out all the even numbers, and the add all the even numbers, we can use the reduce, filter and map methods together.
// console.log(School_marks.map((mark) => mark*2).filter((mark) => mark%2==0).reduce((sum, mark) => sum+mark,0));