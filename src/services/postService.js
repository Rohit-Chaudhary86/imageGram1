import {countAllPosts, createPost as createPostRepository,deletePostsById,findAllPosts, updatePostById} from "../repositories/postRepo.js"

export const createPostService=async (createPostObject)=>{
    //1 take the image on post and upload on aws
    //2 get the url of the image from the aws responce
    //3 create a post with the caption and the image url in the db using repository 
    //4 return the post object 
    const caption =createPostObject.caption?.trim();
    const image=createPostObject.image;
    const user=createPostObject.user; 

    const post=await createPostRepository(caption,image,user);
    return post;
}

export const getAllPostsService=async(offset,limit)=>{
  const posts=await findAllPosts(offset,limit);
  const totalDocuments=await countAllPosts();

  const totalPages=Math.ceil(totalDocuments/limit);

  return{
    posts,totalPages,totalDocuments
  } 
}

export const deletePostService=async(id)=>{
   //call the repo function
   const response=await deletePostsById(id);
   return response;
}

export const updatePostService= async(id,updateObject)=>{
  const response=await updatePostById(id,updateObject);
  return response;
}