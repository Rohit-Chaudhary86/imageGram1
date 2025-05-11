import multer from "multer";
import multerS3 from "multer-s3"
import{s3} from "./awsConfig.js"
import { AWS_BUCKET_NAME } from "./serverConfig.js"
   //multer version -> npm i multer-s3@2.10.0
export const s3uploader=multer({
    storage:multerS3({
        s3: s3,
        bucket:AWS_BUCKET_NAME,
           //below logic left to  understand of how to upload file to s3
        key:function(req,file,cb){
        if(!file){
            return cb(new Error("file not found"));
        }
         //check mimetype for jpeg and png files only
if (file.mimetype !='image/jpeg' && file.mimetype !='image/png') {
    return cb(new Error("file type not supported"))
}
         console.log(file);
        
         const uniqueSuffix=Date.now()+"-"+Math.round(Math.random()* 1e9)

         cb(null,file.fieldname+"-"+uniqueSuffix+"."+file.mimetype.split("/")[1])
        }
    })
}).single("image")