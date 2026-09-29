// Create three variables
const fruits = ["Apple", "Mango", "Banana", "Orange"];
const name = "Ali";
const age = 20;


// Check whether each variable is an array
console.log("Is fruits an array?", Array.isArray(fruits));
console.log("Is name an array?", Array.isArray(name));
console.log("Is age an array?", Array.isArray(age));


// Arrow function named showArray
const showArray = (array) => {
    console.log("Array:", array);
};


// Call showArray with the array
showArray(fruits);


// Another arrow function that accepts one value
const showValue = (value) => {
    console.log("Value:", value);
};


// Call the arrow function with one value
showValue("Hello JavaScript");