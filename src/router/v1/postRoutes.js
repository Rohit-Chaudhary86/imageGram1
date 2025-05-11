// Here all the post related routes will be present
import express from "express";
import {s3uploader} from "../../config/multerConfig.js"
import { createPost, deletePost, getAllPosts, updatePost } from "../../controllers/postControllers.js";
import { validate } from "../../validators/zodValidator.js";
import { zodPostSchema } from "../../validators/zodPostSchema.js";


const router=express.Router(); //router object

router.post("/",s3uploader,validate(zodPostSchema),createPost)
router.get("/",getAllPosts);
router.delete("/:id",deletePost);
router.put("/:id",s3uploader,updatePost)
export default router;