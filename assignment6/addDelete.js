const students = ["Ali", "Ahmed", "Sara", "Hina", "Usman"];

console.log("array:", students);

// push() - add a student to the end
students.push("Ayesha");
console.log("After push():", students);

// pop() - remove the last student
let removedStudent = students.pop();
console.log("Removed student by pop():", removedStudent);
console.log("After pop():", students);

// unshift() - add a student to the beginning
students.unshift("Fatima");
console.log("After unshift():", students);

// shift() - remove the first student
let removedFirstStudent = students.shift();
console.log("Removed student by shift():", removedFirstStudent);
console.log("After shift():", students);

// length - display final number of students
console.log("Final number of students:", students.length);