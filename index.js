const http=require("http");
const PORT=3000;
const server=http.createServer((req,res)=>{
   console.log("server initiated");

   console.log(req);
   console.log(res);

   if (req.url=='/'){
    res.write("home");
   }else if(req.url=='/ping'){
    res.write("Pong");
   }else{
    res.write("hello world");
   }

  
   res.end();
})
server.listen(PORT,()=>{
    console.log("server is listening on http://localhost",PORT);
    
})