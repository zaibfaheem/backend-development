const studentProfile = { 
    name: "Sara Ahmed",
     age: 19,
      department: "Software Engineering",
       address: { city: "Karachi",
country: "Pakistan" } 
};

// Extract the student's name and age into variables.
let {name, age} = studentProfile;
console.log(name);
console.log(age);

// Store the department in a local variable named program,keeping the original property name unchanged in the
// object.
let {department: programe} = studentProfile;
console.log(programe);
console.log( studentProfile.department);

// Extract the city and country from the address information.
let {address : {city, country}} = studentProfile;
console.log(city);
console.log(country);

// Prepare a phone variable that uses "Not provided" when
// no phone value is available.
let {phonenumber = "not provided"} = studentProfile;
console.log(phonenumber);

//Display a short profile summary containing the student's name, program, city, and phone value.
console.log(`
     student name : ${name}
     programe : ${programe} 
     city : ${city}
     phone number : ${phonenumber}`);