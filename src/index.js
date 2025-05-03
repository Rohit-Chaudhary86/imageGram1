import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./router/apiRouter.js"
                          //Use npm start to run project
const PORT=3000;
const app=express();  
app.use(express.json()); //app.use allows if any req comes it will go throw express.json
                         // in short it will allow our code to understand json
app.use(express.text()); // this allow to understand text
app.use(express.urlencoded());

app.use("/api",apiRouter)

app.get("/",(req,res)=>{
    return res.send("hello world");
});




app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
    connectDB();
});
