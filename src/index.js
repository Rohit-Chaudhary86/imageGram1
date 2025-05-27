import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./router/apiRouter.js"
import multer from "multer"
import dotenv from 'dotenv';
import { isAuthenticated } from "./middlewares/authMiddleware.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {operations} from "./utils/swaggerOptions.js"

dotenv.config();

//Use npm start to run project
const PORT=3000;




const app=express();  

const upload =multer();

app.use(express.json()); //app.use allows if any req comes it will go throw express.json
                         // in short it will allow our code to understand json
app.use(express.text()); // this allow to understand text
app.use(express.urlencoded());

const swaggerDocs = swaggerJSDoc(operations);  
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); 

app.use("/api",apiRouter)  //changed


app.get("/ping",isAuthenticated,(req,res)=>{
    console.log(req.body)
    console.log(req.query)
    console.log(req.user)
    return res.json({message:"pong"})
})

app.get("/",(req,res)=>{
    return res.send("hello world");
});

app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
    connectDB();
});
