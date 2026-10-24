function registerStudent(studentName,seatavailable){
    return new Promise((resolve, reject)=>{
        if(seatavailable){
            resolve(`${studentName} your registration is confirmed`);
            
            }else{
                reject(`${studentName}  your registration failed no seat available.`)
        };
        
        

    })
}

//Seat available
registerStudent("Ali", true).then((msg)=>{
    console.log(msg);
})
    .catch((error) => {
        console.log(error);
    });
    

    //No seat available
registerStudent("Sara", false)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

