import AWS from "aws-sdk"
import serverConfig from "./serverConfig"

const s3=new AWS.S3({
    region:serverConfig.AWS_REGION,
    accessKeyId:serverConfig.AWS_ACCESSKEY,
    secretAccessKey:serverConfig.AWS_SECRETACCESSKEY
});
export default s3;