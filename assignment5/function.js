
// function with no parameter
function greet(){
    console.log("welcome to javascript");
} greet();

// function with one parameter

function greetUser(name){
    console.log("welcome " + name);
} greetUser("ali");

// function with 2 parameter

function addNumbers(num1,num2){
    return num1 + num2;
} let sum = addNumbers(4,7);
console.log(sum)