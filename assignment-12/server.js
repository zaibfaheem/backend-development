const http = require(`node:http`);
const server = http.createServer((req, res)=>{
    res.setHeader(`content-type`, `text/plain`);

    if(req.url === `/`){
        res.statusCode = 200;
        res.end(`Welcom to our college`);
    } else if(req.url === `/about`){
        res.statusCode = 200;
        res.end(`college of exelence founded in 1970. Its serving nation with pride`);
    } else if(req.url === `/courses`){
        res.statusCode = 200;
        res.end(`1:- frontend development.
            2:- backend development.
            3:- fullstack web development.`);
        }else if(req.url === `/students`){
            res.statusCode = 200;
            res.end(`Name Sara, id 113.`);
        }else{
            res.statusCode = 404;
            res.end(`404- page not found`);
        }
});


server.listen(3000, ()=>{
    console.log(`server is running on 3000 port`);
});
