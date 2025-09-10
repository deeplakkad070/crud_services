import {DeleteObjectCommand, GetObjectCommand, PutObjectCommand} from '@aws-sdk/client-s3';
import {s3Client } from '../config/awsConfig.js';
import dotenv from 'dotenv';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

dotenv.config();

const BUCKET = process.env.S3_BUCKET;

export const uploadFileToS3 = async(key, buffer, mimeType) => {
    const command = new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: buffer,
      ContentType: mimeType,
    });
    await s3Client.send(command);
    return `https://${BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
  }

export const deleteFileFromS3 = async(key) => {
    const command = new DeleteObjectCommand({
        Bucket: BUCKET,
        Key:key
    })
    await s3Client.send(command);
 }

 export const generateDownloadURL = async(key) =>{
    const command = new GetObjectCommand({
        Bucket: BUCKET,
        Key: key
      });
    
      const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 300 });
      return signedUrl;
 }

 export const generateUploadURL = async(key, fileType) =>{
    const command = new PutObjectCommand({
        Bucket: BUCKET,
        Key: key,
        ContentType: fileType
      });
    
      const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
      return signedUrl;
 }
