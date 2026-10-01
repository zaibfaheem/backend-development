
// Question 2 — Product Price Organizer
const prodtcsPrices = [1200, 450, 3000, 750, 1500, 250];

// lowest to highest order
let ascdPrices = prodtcsPrices.sort((a,b) => a-b);
console.log(ascdPrices);

// highest to lowest order
console.log(prodtcsPrices.reverse());

// random ordering
console.log(prodtcsPrices.sort((a,b) => 0.5-Math.random()));
