import {courses} from "./courses.js";
// export function courseSummary (course){
//     return `Course name is : {course.name} and course fee is : ${course.fee} `;
// }

// export function updateCourse (newCourse){
//     return newCourse;
// }

// Create an updated version of one course with a revised fee while preserving its other details and the original course
// object.
let revisedFee = {...courses[0], fee: 10000};
console.log(revisedFee);

// Use reusable code from a separate module to format a course summary, such as a sentence containing the course
// name, instructor, and fee.

export function summary(courses){
    courses.forEach(course => {
    console.log(`Course name : ${course.courseName}`);
    console.log(`instructor name : ${course.instructor}`);
    console.log(`Course Duration : ${course.duration}`); 
    console.log(`Course fee : ${course.fee}`);         
    });
} 