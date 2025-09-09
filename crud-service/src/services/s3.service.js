import * as s3Repository  from '../repositories/s3.repository.js';

export const uploadFile = async(file)=> {
    const key = `uploads/${file.originalname}`;
    return s3Repository.uploadFileToS3(key, file.buffer, file.mimetype);
  }

  export const deleteFileFromS3 = async(filename)=>{
    const key = `uploads/${filename}`;
    return s3Repository.deleteFileFromS3(key);
  }

  export const generateDownloadURL = async(filename) =>{
    const key = `uploads/${filename}`;
    return s3Repository.generateDownloadURL(key);
  }

  export const generateUploadURL = async(filename,fileType) =>{
    const key = `uploads/${filename}`;
    return s3Repository.generateUploadURL(key,fileType);
  }