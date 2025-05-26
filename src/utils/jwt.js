import jwt from "jsonwebtoken"

export const genrateJwtToken=(payload)=>{
    if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is not set");
  }
 return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1d'})
}