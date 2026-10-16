
// Sample record
const bookRecord = ["BK-104", "JavaScript for Beginners", "Programming", 1200];

// Extract the book ID, book title, and price into separate variables.
let [ID, bookTitle, , price] = bookRecord;
console.log(ID);
console.log(bookTitle);
console.log(price);

// Prepare a category variable that uses
// "General" when the record does not include a category.
const shortRecord = ["BK-105", "Learning ES6"];
let [Id, booktitle, category = "General"] = shortRecord;
console.log(`Book ID is: ${Id}  booktitle is: ${booktitle}  and categorey is:  ${category}`);