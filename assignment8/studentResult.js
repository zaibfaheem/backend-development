const studentResult = {
    Name : "Ali",
    Class : "10th",
    ChemistryMarks : 80,
    MathMarks : 76,
    UrduMarks : 88,
    EnglishMarks : 92,
    total : function(){
        return this.ChemistryMarks + this.MathMarks + this.UrduMarks + this.EnglishMarks; 
    },
    percentage : function(){
        return (this.total()/400) * 100;
    },

};

// display student name
console.log(studentResult.Name);

// display student clas
console.log(studentResult.Class);

// use of bracket notation
console.log(studentResult["UrduMarks"]);
// total marks and percentage
console.log("student total marks are" + " " + studentResult.total() + "and percentage is" + " " + studentResult.percentage());

// second object
const studentResult1 = {
    Name : "Sara",
    Class : "10th",
    ChemistryMarks : 86,
    MathMarks : 50,
    UrduMarks : 66,
    EnglishMarks : 87,
    total : function(){
        return this.ChemistryMarks + this.MathMarks + this.UrduMarks + this.EnglishMarks; 
    },
    percentage : function(){
        return (this.total()/400) * 100;
    },

};

// remove one property and display final object
delete studentResult1. UrduMarks;
console.log(studentResult1);