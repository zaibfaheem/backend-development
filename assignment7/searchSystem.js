const students = ['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza','Sara', 'Bilal'];

// is Ayesha presaent
console.log(students.includes("Ayesha"));

// first ocuurance of sara
console.log(students.indexOf("Sara"));

// last occurence of sara
console.log(students.lastIndexOf("Sara"));

// Find the first student whose name starts with the letter A.

let result = students.find(student => student[0] === "A");
console.log(result);

// Find the position of the first student satisfying that condition.
console.log(students.findIndex(student => student[0] === "A"));

// • Find the last student satisfying a chosen condition and determine that student's position.
console.log(students.findLastIndex(student => student[0] === "A"));