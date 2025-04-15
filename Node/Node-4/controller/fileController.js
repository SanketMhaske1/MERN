const File = require("../model/fileModel");
const cloudinary = require("cloudinary").v2;

exports.loacalFileUpload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log(file);

    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;

    console.log("Path", path);
    file.mv(path, (error) => {
      console.log(error);
    });

    return res.json({ status: true, message: "File Upload Success" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Fail To Upload File",
      error: error.message,
    });
  }
};

async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder };
  if (quality) {
    options.quality = quality;
  }
  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req, res) => {
  try {
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    if (!name || !tags || !email) {
      return res.status(400).json({
        success: false,
        message: "Please Fill All Fields",
      });
    }

    const file = req.files.imageFile;
    console.log(file);

    const supportedImage = ["png", "jpg", "jpeg"];
    const currentFileType = file.name.split(".")[1].toLowerCase();

    if (!supportedImage.includes(currentFileType)) {
      return res.status(400).json({
        success: false,
        message: "Please Upload Supported Image",
      });
    }

    const response = await uploadFileToCloudinary(file, "Codehelp");
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    return res.status(200).json({
      success: true,
      message: "Image Upload Success",
      data: fileData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Fail To Upload image",
      error: error.message,
    });
  }
};

exports.videoUpload = async (req, res) => {
  try {
    const { name, tags, email } = req.body;
    console.log(name, tags, email);
    if (!name || !tags || !email) {
      return res.status(400).json({
        success: false,
        message: "Please Fill All Fields",
      });
    }

    const videoFile = req.files.videoFile;
    console.log(videoFile);
    const supportedVideo = ["mp4", "mov"];
    const currentFileType = videoFile.name.split(".")[1].toLowerCase();
    if (!supportedVideo.includes(currentFileType)) {
      return res.status(400).json({
        success: false,
        message: "Please Upload Supported Video",
      });
    }
    const response = await uploadFileToCloudinary(videoFile, "Codehelp");
    const fileData = await File.create({
      name,
      tags,
      email,
      videoUrl: response.secure_url,
    });
    return res.status(200).json({
      success: true,
      message: "Video Upload Success",
      data: fileData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Fail To Upload video",
      error: error.message,
    });
  }
};

exports.imageSizeReducerUpload = async (req, res) => {
  try {
    const { name, tags, email } = req.body;
    if (!name || !tags || !email) {
      return res.status(400).json({
        success: false,
        message: "Please Fill All Fields",
      });
    }
    const imageFile = req.files.imageFile;
    const supportedImage = ["png", "jpg", "jpeg"];
    console.log(imageFile);
    const currentFileType = imageFile.name.split(".")[1].toLowerCase();
    console.log(currentFileType);
    if (!supportedImage.includes(currentFileType)) {
      return res.status(400).json({
        success: false,
        message: "Please Upload Supported Image",
      });
    }
    if (imageFile.size > 1024 * 1024 * 5) {
      return res.status(400).json({
        success: false,
        message: "Image Size Must Be Less Than 5MB",
      });
    }
    const response = await uploadFileToCloudinary(imageFile, "Codehelp", 30);
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });
    return res.status(200).json({
      success: true,
      message: "Image Upload Success",
      data: fileData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Fail To Upload image",
      error: error.message,
    });
  }
};
