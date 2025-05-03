// Here all the post related routes will be present
import express from "express";
import {s3uploader} from "../../config/multerConfig.js"
import { createPost, getAllPosts } from "../../controllers/postControllers.js";

const router=express.Router(); //router object

router.post("/",s3uploader,createPost)
router.get("/",getAllPosts);
export default router;