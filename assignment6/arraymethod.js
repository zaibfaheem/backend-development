// Create two arrays
const boys = ["Ali", "Ahmed", "Usman", "Hamza"];
const girls = ["Sara", "Hina", "Ayesha", "Zara"];

console.log("Boys:", boys);
console.log("Girls:", girls);


// 1. concat() - combine two arrays into a new array
const students = boys.concat(girls);

console.log("After concat():", students);


// 2. slice() - create a new array from a selected portion
const selectedStudents = students.slice(1, 5);

console.log("After slice():", selectedStudents);


// 3. splice() - remove at least one element
students.splice(2, 1);

console.log("After splice() remove:", students);


// 4. splice() - add an element at a specific position
students.splice(2, 0, "Bilal");

console.log("After splice() add:", students);


// 5. delete - delete one array element using its index
delete students[1];

console.log("After delete:", students);


// 6. Display the length after delete
console.log("Length after delete:", students.length);


// 7. Display the deleted position
console.log("Deleted position:", students[1]);