import AWS from "aws-sdk"
import serverConfig from "./serverConfig"

const s3=new AWS.S3({
    region:serverConfig.AWS_REGION,
    accesskey:serverConfig.AWS_ACCESSKEY,
    secutityaccesskey:serverConfig.AWS_SECRETACCESSKEY
});
export default s3;