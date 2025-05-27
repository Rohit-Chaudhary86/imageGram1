import dotenv from "dotenv";
dotenv.config();

 export const DB_URL=process.env.DB_URL;   //for exporting db url
 export const AWS_ACCESSKEY=process.env.AWS_ACCESSKEY;  //for exporting access key
 export const AWS_SECRETACCESSKEY=process.env.AWS_SECRETACCESSKEY; //for exporting secret access key
 export const AWS_REGION=process.env.AWS_REGION;  //for exporting AWS Region
 export const AWS_BUCKET_NAME=process.env.AWS_BUCKET_NAME;  //exports bucket name
export const JWT_SECRET=process.env.JWT_SECRET;
