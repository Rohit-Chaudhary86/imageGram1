import mongoose from "mongoose";
import { createUser, findUserByEmail } from "../repositories/userRepo.js";
import bcrypt from "bcrypt"
import { genrateJwtToken } from "../utils/jwt.js";

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

export const signinUserService=async(userDetails)=>{
    try {
        //check if valid email
        const user=await findUserByEmail(userDetails.email);
        if(!user){
            throw{
                status:404,
                message:"user not found"
            }
        }

        // compare the pass
        const isPasswordValid=bcrypt.compareSync(userDetails.password,user.password)
        if(!isPasswordValid){
            throw{
                status:401,
                message:"invalid password"
            }
        }
        const token=genrateJwtToken({email: user.email, _id:user._id, username:user.username})
        return token;
    } catch (error) {
        throw error;
    }
}