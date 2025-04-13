
import user from "../schema/user"

export const findUserByEmail=async (email)=>{
    try {
        const user = await user.findone({email});
        return user;
    } catch (error) {
        console.log(error);
        
    }
}

export const fundAllUsers= async  ()=>{
    try {
        const users=await user.find();
        return users;
    } catch (error) {
        console.log(error);
        
    }
}