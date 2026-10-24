 function getStudentData(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`data of  ${id} is receieved.`);
            resolve(`Data of ${id} is received.`);
        },2000);
    });
};

async function display(){
    console.log(`student 1 data is loading`);
    await getStudentData("student1");
    console.log(`student 2 data is loading`);
    await getStudentData("student2");
    console.log(`student 3 data is loading`);
    await getStudentData("student3");
    console.log(`all data recieved.`);
};
display();