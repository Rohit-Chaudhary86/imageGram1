import express from "express";
import connectDB from "./config/dbConfig.js";
import { createPost } from "./controllers/postControllers.js";

const PORT=3000;
app.use(express.json()); //app.use allows if any req comes it will go throw express.json
                         // in short it will allow our code to understand json
app.use(express.text()) // this allow to understand text
const app=express();  

app.get("/",(req,res)=>{
    return res.send("hello world");
});


app.post("/posts",[m1,m2,m3],createPost);

app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
    connectDB();
});
