
// prepare a summary for one course by extracting the course name and fee into variables.
import { courses } from "./courses.js";
import { summary } from "./courseUtils.js";
let {courseName, fee} = courses[0];
console.log(`The course name is ${courseName} and fee is ${fee}`);

// Create a separate list containing the existing courses plus one newly introduced course.
let  updatedCourses = [...courses,
      {
        courseName: "Marketing",
        instructor: "Ahmad",
        fee: 10000
    }]; 
console.log(updatedCourses);
console.log(courses);

summary(courses);