import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique: true,
        minLength:5,
    },
    email:{
        type:String,
        required:true,
        minLength:7,
        unique:true,
        validate:{
            validator:function(emailValue){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
            },
            message:"invalid email format"
        }
    },
    password:{
        type:String,
        required:true,
        unique:true,
        minLength:8,
        validate:{
            validator:function(passValue){
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/.test(passValue);
            },
            message:"invalid pass"
        }
    }
},{timestamps:true});  //timestamp which give update about time at which changes occur

userSchema.pre('save',function modifyPass(next){
   //incoming user object 
   const user=this;
   const SALT=bcrypt.genSaltSync(9); //higher the salt value stronger the hash
   //hash pass
   const hashedPassword=bcrypt.hashSync(user.password , SALT);

   //replace plain pass with hash pass
   user.password=hashedPassword;
   next();
})  
    

const User=mongoose.model("user",userSchema);
export default User;