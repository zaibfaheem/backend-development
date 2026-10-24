// function OrderProcessing(callback){
//     setTimeout(()=>{
//         callback();
//     },2000);
// };
// function update() {
//     console.log("your order received");

//     OrderProcessing(() => {
//         console.log("your order is preparing");

//         OrderProcessing(() => {
//             console.log("your order is ready");

//             OrderProcessing(() => {
//                 console.log(`your order delivered`);
//             });
//         });
//     });
// };

// update();


// function OrderProcessing(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve();
//         },2000);
//     });
// };

// function update() {
//     console.log("your order received");
//     OrderProcessing()
//     .then(()=>{
//         console.log("your order is preparing");
//         return OrderProcessing();
//     })
//     .then(() => {
//             console.log("your order is ready");
//             return OrderProcessing();
//         })
//         .then(() => {
//             console.log("your order is delivered");
//         });
// }
// update();


function OrderProcessing(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },2000);
    });
};

async function update() {
    console.log("your order received");

    await OrderProcessing();
    console.log("your order is preparing");

    await OrderProcessing();
    console.log("your order is ready");

    await OrderProcessing();
    console.log("your order is delivered");
}

update();