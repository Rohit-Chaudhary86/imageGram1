import post from "../schema/post.js";


export const createPost=async(caption,image,user)=>{  //create post
    try {
        const newpost=await post.create({caption,image,user});
        return newpost;
    } catch (error) {
        console.log(error);
            
    }
};

export const findAllPosts=async(offset,limit)=>{  //find all posts
    try {
        const find=await post.find().sort({createdAt:-1}).skip(offset).limit(limit).populate('user', 'userName email _id');  //createdAt:-1 show our posts in descending order
        return find;
    } catch (error) {
        console.log(error);
        
    }
}

export const countAllPosts=async()=>{
    try {
        const count=await post.countDocuments();
        return count;
    } catch (error) {
        console.log(error);
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

export const deletePostsById =async(id)=>{    //delete post related to id
    try {
        const findPostByid= await post.findByIdAndDelete(id);
        return findPostByid;
    } catch (error) {
        console.log(error);
    }
}

export const updatePostById=async(id,updateObject)=>{
    try {
        const updatePost = await post.findByIdAndUpdate(id,updateObject,{new:true});
        return updatePost;                         //{new:true} returns us updated document
    } catch (error) {
        console.log(error)
    }
}