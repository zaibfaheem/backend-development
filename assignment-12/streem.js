const fs = require(`node:fs`);
const readable = fs.createReadStream(`Large.txt`, {
    encoding: `utf8`
});

readable.on(`data`, (chunks) =>{
    console.log(`recieved a chunk`);
    console.log(chunks);
});

readable.on(`end`, ()=>{
    console.log(`all data recieved`);
});

readable.on(`error`, (error)=>{
    console.log(error);
});

const writeable = fs.createWriteStream(`copy.txt`);
readable.pipe(writeable);
writeable.on(`finish`,()=>{
    console.log(`file copied successfully`);
});

readable.on(`error`, (error)=>{
    console.log(error);
});
writeable.on(`error`,(error)=>{
    console.log(error);
});