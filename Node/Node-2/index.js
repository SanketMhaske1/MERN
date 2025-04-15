const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;
const dbConnection = require("./config/dbConnection");
const bodayParser = require("body-parser");
const router = require("./router/blog");

app.use(bodayParser.json());
app.use("/api/v1", router);
dbConnection();
app.listen(port, (req, res) => {
  console.log("Server is running on port", port);
});
