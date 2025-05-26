import mongoose from "mongoose";
import { createUser } from "../repositories/userRepo.js";

export const signupUserService=async(user)=>{
    try {
        const newUser=await createUser(user)
        return newUser;
    } catch (error) {
        if(error.name=="MongoServerError" && error.code==11000){
          throw{
            status:400,
            message:"user with same email or username already exist"
          }
        }
       throw error;
    }
}