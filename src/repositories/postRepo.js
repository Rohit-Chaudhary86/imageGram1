import post from "../schema/post"

export const createPost=async(caption,image,url)=>{  //create post
    try {
        const newpost=await post.create({caption,image,url});
        return newpost;
    } catch (error) {
        console.log(error);
        
    }
};

export const findAll=async()=>{  //find all posts
    try {
        const find=await post.find();
        return find;
    } catch (error) {
        
    }
}

export const findPostById =async(id)=>{    //find post related to id
    try {
        const findPostByide= await post.findById(id);
        return findPostByide;
    } catch (error) {
        console.log(error);
    }
}

export const deleteById =async(id)=>{    //delete post related to id
    try {
        const findPostByide= await post.findByIdAndDelete(id);
        return findPostByide;
    } catch (error) {
        console.log(error);
    }
}