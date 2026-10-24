
// Create a function named calculate() that accepts two numbers and a callback. Pass a callback that adds the
// numbers and displays the result.
function calculate(a,b,callback){
    callback(a,b);
};
function add(a,b){
    let result = a+b;
    console.log(result);
};
calculate(5,4,add);


// Create a function named calculateBill() that accepts three product prices and a callback. Use prices 200, 300,
// and 500; the expected total is 1000.
function calculateBill(price1,price2,price3,callback){
    callback(price1,price2,price3);
};
function  total(RS1,RS2,RS3){
    let result = RS1+RS2+RS3;
    console.log(result);

};
calculateBill(200,300,500,total);


// Create withdrawMoney(amount, callback). Assume a starting balance of 10,000. After approximately two
// seconds, call the callback to display the remaining balance.
function withdrawMoney(amount, callback){
    setTimeout(()=>{
         let remainingBalance = amount - 2000;
         callback(remainingBalance);
    },2000)
};
function remaining(remainingBalance){
        console.log(remainingBalance)
    }
withdrawMoney(10000,remaining);