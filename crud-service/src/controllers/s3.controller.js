import * as fileService from "../services/s3.service.js";
import error from "../utils/error.js";

export const uploadFile = async (req, res, next) => {
  try {
    if (!req.file) return next(error("File required", 404));
    const fileUrl = await fileService.uploadFile(req.file);
    res.json({ message: "Uploaded successfully", url: fileUrl });
  } catch (err) {
    next(err);
  }
};

export const deleteFileFromS3 = async (req, res, next) => {
  try {
    if (!req.body.key) return next(error("file name required", 404));
    const response = await fileService.deleteFileFromS3(req.body.key);
    res.json({ message: "File Deleted SuccessFully", data: response });
  } catch (err) {
    next(err);
  }
};

export const preSignedDownloadUrl = async (req, res, next) => {
  try {
    const { key } = req.query;
    if (!key) return next(error("File name is required", 400));
    const downloadURL = await fileService.generateDownloadURL(key);
    res.json({ message: "Download Url", URL: downloadURL });
  } catch (err) {
    next(err);
  }
};

export const preSignedUploadUrl = async (req, res, next) => {
    try {
      const { fileName, fileType  } = req.query;
      if (!fileName && !fileType) return next(error("fileName and fileType are required", 400));
      const uploadURL = await fileService.generateUploadURL(fileName,fileType);
      res.json({ message: "Upload Url", URL: uploadURL });
    } catch (err) {
      next(err);
    }
  };
