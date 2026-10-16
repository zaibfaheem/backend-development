export const sampleData ={ name: "Sara Ahmed", age: 19, department: "Software Engineering", address: { city: "Karachi",
country: "Pakistan" } };
// In studentTools.js, create and make available a function that receives a student's first and last name and returns the
// full name.
export function studentFullname (fullname){
    return fullname;
};

// create and make available a function that receives marks from four subjects and returns the total
// marks.
export default function totalMarks (a,b,c,d){
    let total = a + b + c + d;
    return total;
}