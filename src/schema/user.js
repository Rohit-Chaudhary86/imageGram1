import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique: true,
        minLength:5,
    },
    email:{
        type:String,
        require:true,
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
        type:Number,
        require:true,
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
const user=mongoose.model("user",userSchema);
export default user;