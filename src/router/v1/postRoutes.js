// Here all the post related routes will be present
import express from "express";
import {s3uploader} from "../../config/multerConfig.js"
import { createPost, deletePost, getAllPosts, updatePost } from "../../controllers/postControllers.js";

const router=express.Router(); //router object

router.post("/",s3uploader,createPost)
router.get("/",getAllPosts);
router.delete("/:id",deletePost);
router.put("/:id",s3uploader,updatePost)
export default router;