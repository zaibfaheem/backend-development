const employee = {
    ID:1234,
    firstname:"awais",
    lastname:"khan",
    department:"sales",
    designation:"admin",
    salary:100000,
    fullname:function(){
    return this.firstname+ " "+this.lastname;
    },
     information:function(){
        return "employee ID is "+ this.ID+ " and "+this.department+ " is his department";
     }

};
let fulName = employee.fullname();
console.log(fulName);
let infrmtn = employee.information();
console.log(infrmtn);


// second object
const employee1 = {
    ID:2345,
    firstname:"waqas",
    lastname:"khan",
    department:"HR",
    designation:"head",
    salary:100000,
    fullname:function(){
    return this.firstname+ " "+this.lastname;
    },
     information:function(){
        return "employee1 ID is "+ this.ID+ " and "+this.department+ " is his department";
     }

};
let fulName1 = employee1.fullname();
console.log(fulName1);
let infrmtn1 = employee1.information();
console.log(infrmtn1);
