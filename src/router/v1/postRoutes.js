// Here all the post related routes will be present
import express from "express";
import {s3uploader} from "../../config/multerConfig.js"
import { createPost, deletePost, getAllPosts, updatePost } from "../../controllers/postControllers.js";
import { validate } from "../../validators/zodValidator.js";
import { zodPostSchema } from "../../validators/zodPostSchema.js";
import { isAdmin, isAuthenticated } from "../../middlewares/authMiddleware.js";


const router=express.Router(); //router object

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     description: Creates a new post and uploads it to S3
 */



router.post("/",isAuthenticated,s3uploader,validate(zodPostSchema),createPost)
router.get("/",getAllPosts);
router.delete("/:id",isAuthenticated,deletePost);
router.put("/:id",isAuthenticated,isAdmin,s3uploader,updatePost)
export default router;