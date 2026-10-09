
// performance report analyzer
const performanceReport= [45, 78, 92, 61, 88, 54, 73,95];

// new list increased by 5
const practiceAssessment = performanceReport.map(function(value){
    return value + 5;
});
console.log(practiceAssessment);

// • Create another list containing only students whose marks are 70 or above.
const marks = performanceReport.filter((value) => value >= 70);
console.log(marks);

// • Find the first mark greater than 90.
let highestMarks = performanceReport.find((value) => value > 90);
console.log(highestMarks);

// Calculate the total of all marks in the original list.
 let total = performanceReport.reduce(function(total,value){
    return total  + value;
},0);
console.log(total);

// orignal array
console.log(performanceReport);