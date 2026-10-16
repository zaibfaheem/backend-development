const GroupA = ["Ali", "Ahmed", "Hamza"];
const GroupB = ["Sara", "Ayesha", "Laiba"];
const Profile = { name: "Laiba",
     className: "Web Development",
      city: "Karachi" };

// Create a combined class list containing the students from both groups.
let combineGroup = [...GroupA,...GroupB];
console.log(combineGroup);

// Create an independent copy of Group A. Add a new student to the copy and show that the original Group A has not
// changed.
let group1 = [...GroupA, "Hanzala"];
console.log(group1);
console.log(GroupA);

// Create an updated profile for Laiba in which the city is changed to "Lahore" while the original profile remains
// unchanged.
let updatedProfile = {...Profile, city : "Lahore"};
console.log(updatedProfile);
console.log(Profile);


// Create another updated profile that keeps the existing details and adds a new property called email.
let updatedProfile2 = {...Profile, city : "Lahore", Email: "email@laiba.com"};
console.log(updatedProfile2);
console.log(Profile);