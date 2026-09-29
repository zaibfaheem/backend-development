// Product List Manager

// Starting Data
const products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Headphones"
];


// 1. Display the number of products using length
console.log("Number of products:", products.length);


// 2. Display the first and last product using at()
console.log("First product:", products.at(0));
console.log("Last product:", products.at(-1));


// 3. Add a product using push()
products.push("Printer");
console.log("After push():", products);


// 4. Add another product using unshift()
products.unshift("Webcam");
console.log("After unshift():", products);


// 5. Remove the last product using pop()
let removedLastProduct = products.pop();
console.log("Removed last product:", removedLastProduct);
console.log("After pop():", products);


// 6. Remove the first product using shift()
let removedFirstProduct = products.shift();
console.log("Removed first product:", removedFirstProduct);
console.log("After shift():", products);


// 7. Create a second product array
const secondProducts = [
    "Speaker",
    "Tablet",
    "Microphone"
];

console.log("Second product array:", secondProducts);


// 8. Combine arrays using concat()
const allProducts = products.concat(secondProducts);
console.log("After concat():", allProducts);


// 9. Use slice() to create a smaller list
const smallerList = allProducts.slice(1, 4);
console.log("Smaller list using slice():", smallerList);


// 10. Use splice() to replace a product
allProducts.splice(2, 1, "Smart Watch");
console.log("After splice():", allProducts);


// 11. Use join() to display the final product list as a string
console.log("Final product list:", allProducts.join(" - "));


// 12. Use an arrow function to display the final array
const showProducts = (products) => {
    console.log("Final array:", products);
};

showProducts(allProducts);


// 13. Use Array.isArray() to verify the final product list
console.log("Is the final product list an array?", Array.isArray(allProducts));