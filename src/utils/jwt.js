import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/serverConfig.js";

export const genrateJwtToken=(payload)=>{
    if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is not set");
  }
 return jwt.sign(payload,JWT_SECRET,{expiresIn:'1d'})
}

export const verifyJWT=(token)=>{
    return jwt.verify(token,JWT_SECRET);
}