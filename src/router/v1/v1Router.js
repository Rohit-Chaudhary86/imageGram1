import express from "express"
import postRouter from "./postRoutes.js"
import userRouter from "./userRoutes.js"
const router=express.Router();

router.use("/posts",postRouter);

router.use("/users",userRouter);

export default router;