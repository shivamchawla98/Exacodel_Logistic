import { S3 } from "aws-sdk";

export async function getStaticProps() {
    return new S3({
        region: process.env.REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        signatureVersion: "v4",
      });
}