//Netsted loops
var i = 15;
if (i == 5){
    console.log("i is 5");
} else if (i == 10) {
    console.log("i is 10");
} else {
    console.log("i is neither 5 nor 10");
}

//Switch case  
var day = 8;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

for(let k=1; k<=10; k++){
    if(k%2==0 && k%4==0){
        console.log(k);
    }
}