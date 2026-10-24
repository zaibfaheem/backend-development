const tickets = [
    
    { ticketId : 101,
        customerName : "Ali",
        status : "open", 

    },
      
    { ticketId : 102,
        customerName : "Ahmad",
        status : "in progress", 

    },

        
      
    { ticketId : 103,
        customerName : "Hina",
        status : "resolved", 

    },

];


function displayStatus(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const ticket = tickets.find((item)=> item.ticketId === id);
            if(ticket){
                resolve(`success`);

            } else {
                reject(`Ticket ID ${id} not found`);
            }
        },2000)
    });
};

async function retrieve (){
    console.log(`checking ticket id 101`);
    await displayStatus(101);
    console.log(`ticket ID ${tickets[0].ticketId} status is ${tickets[0].status}`);
    console.log(`checking ticket id 102`);
    await displayStatus(102);
    console.log(`ticket ID ${tickets[1].ticketId} status is ${tickets[1].status}`);
    console.log(`checking ticket id 103`);
    await displayStatus(103);
    console.log(`ticket ID ${tickets[2].ticketId} status is ${tickets[2].status}`);
    console.log(`checking ticket id 104`);
    await displayStatus(104);
}; 
retrieve().catch ((error)=>{
    console.log(error);
});
