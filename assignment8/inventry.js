// Question 4 - Store Inventory Using JavaScript Map
const fruits = new Map();
fruits.set("apples", 500);
fruits.set("banana", 300);
fruits.set("mango", 200);
console.log(fruits);

// add one new product
fruits.set("pineapple", 400);

// change the quantity of one product
fruits.set("apples", 600);
console.log(fruits);

// • Retrieve and display the quantity of a specific product.
let apple = fruits.get("apples");
console.log(apple);

// Check whether a particular product exists in the inventory and display the result.
let product = fruits.has("pineapple");
console.log(product);

// Remove one product from the inventory.
let remove = fruits.delete("banana");
console.log(remove);

// • Display the current number of product entries.
let numbers = fruits.size;
console.log(numbers);

// all keys
console.log(fruits.keys());

// all values
console.log(fruits.values());

// empty the inventory
console.log(fruits);

// display its final size.
fruits.clear();
console.log(fruits.size);