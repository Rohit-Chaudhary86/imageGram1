import express from "express";
import connectDB from "./config/dbConfig.js";

const PORT=3000;
const server=express();
server.get("/",(req,res)=>{
    return res.send("hello world");
});

server.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
    connectDB();

});
