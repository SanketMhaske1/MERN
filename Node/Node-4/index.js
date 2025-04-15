const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbConnection");
const bodayParser = require("body-parser");
const cloudinary = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const uploadRoute = require("./route/fileUpload");

const app = express();
const port = process.env.PORT || 3001;
dbConnect();
cloudinary.cloudinaryConnect();
app.use(bodayParser.json());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));
app.use("/api/v1", uploadRoute);

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
