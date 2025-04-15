const express = require("express");
const router = express.Router();

const {
  loacalFileUpload,
  imageUpload,
  videoUpload,
  imageSizeReducerUpload,
} = require("../controller/fileController");

router.post("/localFileUpload", loacalFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
router.post("/imageSizeReducerUpload", imageSizeReducerUpload);

module.exports = router;
