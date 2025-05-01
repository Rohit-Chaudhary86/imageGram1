import AWS from "aws-sdk";
import {AWS_ACCESSKEY, AWS_SECRETACCESSKEY, AWS_REGION} from "./serverConfig.js";

export const s3 = new AWS.S3({
    region: AWS_REGION,
    accessKeyId: AWS_ACCESSKEY,
    secretAccessKey: AWS_SECRETACCESSKEY
});

