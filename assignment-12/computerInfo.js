
const os = require("node:os");
const path = require("node:path");
const fs = require("node:fs");

//Computer Information

console.log("Operating System:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());

//Create data folder

const folderPath = path.join(__dirname, "data");

if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log("Data folder created");
} else {
    console.log("Data folder already exists");
}

//Build file path

const filePath = path.join(folderPath, "student-notes.txt");

console.log("File Name:", path.basename(filePath));
console.log("File Extension:", path.extname(filePath));

//Create and write file

const notes = `I learned Node.js modules.
I learned how to use the OS module.
I learned how to read and write files using FS module.`;

fs.writeFileSync(filePath, notes);

console.log("\nOriginal Notes:");
console.log(fs.readFileSync(filePath, "utf8"));

//Append another line

fs.appendFileSync(filePath, "\nI also learned about the Path module.");

console.log("\nUpdated Notes:");
console.log(fs.readFileSync(filePath, "utf8"));

//Rename file

const newFilePath = path.join(folderPath, "class-notes.txt");

fs.renameSync(filePath, newFilePath);

console.log("\nFile renamed successfully");

//Create temporary file

const tempFilePath = path.join(folderPath, "temp.txt");

fs.writeFileSync(tempFilePath, "This is a temporary file.");

console.log("Temporary file created");

//Remove temporary file

fs.unlinkSync(tempFilePath);

console.log("Temporary file deleted");
