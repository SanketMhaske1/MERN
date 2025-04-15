const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const fileUploadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String },
  tags: { type: String },
  email: { type: String },
});

fileUploadSchema.post("save", async function (doc) {
  try {
    console.log(doc);
    let transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env_MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    let info = transport.sendMail({
      from: process.env.MAIL_FROM,
      to: doc.email,
      subject: "File Upload Success",
      text: `Your file ${doc.name} has been uploaded successfully.`,
    });
    console.log("mail", info);
  } catch (error) {
    console.log(error);
  }
});

module.exports = mongoose.model("File", fileUploadSchema);
