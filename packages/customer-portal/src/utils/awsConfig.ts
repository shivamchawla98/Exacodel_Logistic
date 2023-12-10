// aws.config.ts

import { S3 } from 'aws-sdk';

const s3 = new S3({
  accessKeyId: 'AKIA5FWQZ5L4KOCCTT73',
  secretAccessKey: 't/sarDSDm7JW3i8ajaOGtkmdndCUiEpAvcuTbFH9',
  region: 'ap-south-1', // e.g., 'us-east-1'
});

export default s3;
