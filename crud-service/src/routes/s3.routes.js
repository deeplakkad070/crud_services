import { Router } from "express";
import { uploadFile,deleteFileFromS3, preSignedDownloadUrl,preSignedUploadUrl } from "../controllers/s3.controller.js";
import multer from 'multer';

const router = Router();
const upload = multer(); 

router.post(
  "/upload",
  upload.single('file'),
  uploadFile
);

router.post(
    "/delete",
    deleteFileFromS3
);

router.get(
    "/generateDownloadURL",
    preSignedDownloadUrl
)

router.get(
    "/generateUploadURL",
    preSignedUploadUrl
)

export const s3Router = router;