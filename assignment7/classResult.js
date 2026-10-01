
// Question 3 — Class Result Analysis
const classResult1 = [78, 45, 92, 66, 88, 54, 91, 73];
// second array of result marks
const result2 = [79,60,75,65,90];
// combining the array
const result = classResult1.concat(result2);
console.log(result);

// selected portion of combine marks
const miniarray = result.slice(1,6);
console.log(miniarray);

//  remove one mark in the middle
let remove = result.toSpliced(5,1);
console.log(remove);

// change one marks
result[3] = 35;
console.log(result);

// total number of marks currently stored.
let size = result.length;
console.log(size);

// lowest to highest results
const orderArray = result.sort((a,b)=>a-b);
console.log(orderArray);

// highest to lowest
console.log(orderArray.reverse());


const showResult = (marks) => {
    console.log(marks);
}; showResult(result);