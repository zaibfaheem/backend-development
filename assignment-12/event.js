const EventEmitter = require(`events`);
const registrationSystem = new EventEmitter()
registrationSystem.on(`studentregistered`, (Id, name) =>{
    console.log(`student ID ${Id} and name is ${name} registered successfully.`);

    setTimeout(() =>{
        console.log(`Reminder! new student registered.`);

    },3000);
})

console.log(`student is registering`);
registrationSystem.emit(`studentregistered`, 112, `Ali`);
registrationSystem.emit(`studentregistered`, 113, `Sara`);