import { createPostService, getAllPostsService, } from "../services/postService.js"


export async function createPost(req,res){
    const post=await createPostService({
        caption:req.body.caption,
        image:req.file.location
    })
    return res.status(201).json({
        success:true,
        message:"post created succesfully",
        data:post
    })
}

export async function getAllPosts(req,res){
    try {
        const limit=req.query.limit || 10;
        const offset=req.query.offset ||0;
        const paginatedPosts=await getAllPostsService(offset,limit);

        res.status(200).json({
            success:true,
            message:"All posts fetched succesfully",
            data:paginatedPosts
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}