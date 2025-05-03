import {countAllPosts, createPost as createPostRepository,findAllPosts} from "../repositories/postRepo.js"

export const createPostService=async (createPostObject)=>{
    //1 take the image on post and upload on aws
    //2 get the url of the image from the aws responce
    //3 create a post with the caption and the image url in the db using repository 
    //4 return the post object 
    const caption =createPostObject.caption?.trim();
    const image=createPostObject.image;
      //const user=createPostObject.user; --> add later

    const post=await createPostRepository(caption,image);
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