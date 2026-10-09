const orderAmount = [1200,450,3000,750,1500,250,4200,900];

// the first order amount greater than 2000.
let firstAmount = orderAmount.find(myFunction);
function myFunction(value){
    return value > 2000;
}  console.log(firstAmount);

// all orders greater than 1000.
let newArr = orderAmount.filter(function(value){
    return value > 1000;
}); console.log(newArr);


// combined total of all order amounts.
let totalAmount = orderAmount.reduce((total,value) => total + value);
 console.log(totalAmount);