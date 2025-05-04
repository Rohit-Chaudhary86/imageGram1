import { createPostService, deletePostService, getAllPostsService, updatePostService, } from "../services/postService.js"


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
        });
    }
}

export async  function deletePost(req,res){
    try {
        const postId=req.params.id;
        const response=await deletePostService(postId);
        if(!response){
            return res.status(404).json({
                success:false,
                message:"post not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"post deleted succesfully",
            data:response
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"internal server error"
        });
    }

}
// you can update image or caption seprately or at once 
export async function updatePost(req,res){
    try {
        const updateObject=req.body;
        if(req.file){
            updateObject.image=req.file.location; //to check is image updated or not
        }
        const response=await updatePostService(req.params.id,updateObject);
        return res.status(200).json({
            success:true,
            message:"post updated succesfully",
            data:response
        })
        
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success:false,
            message:"internal server error"
        })
        
    }
}