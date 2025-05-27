import express from "express"
import { getProfile, signin, signup } from "../../controllers/userController.js"
import { validate } from "../../validators/zodValidator.js";
import { zodSignupSchema } from "../../validators/zodSignupSchema.js";
import { zodSigninSchema } from "../../validators/zodSigninSchema.js";
const router=express.Router()

router.get("/profile",getProfile);
/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Signup a new post
 *     description: Signup a new post
 */

router.post("/signup",validate(zodSignupSchema),signup);
router.post("/signin",validate(zodSigninSchema),signin)

export default router;