
const { studentIntroduction, calculatePercentage } = require("./student");

let name = "Ali";
let course = "Web Development";

let obtainedMarks = 425;
let totalMarks = 500;

let introduction = studentIntroduction(name, course);

let percentage = calculatePercentage(obtainedMarks, totalMarks);

console.log(introduction);
console.log("Student Name:", name);
console.log("Course:", course);
console.log("Percentage:", percentage + "%");
console.log("Node.js Version:", process.version);
