import mongoose from "mongoose";
const postSchema=new mongoose.Schema({
    caption:{
        type:String,
        require:true,
        minLength:5,
    },image:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.type.objectId,
        ref:"user"
    }
}
)
const post=mongoose.model("user",postSchema);
export default post;