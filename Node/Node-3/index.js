const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const dbConnection = require("./config/dbConnection");
const userRouter = require("./router/user");
const cookieParser = require("cookie-parser");
const app = express();
app.use(bodyParser.json());
const port = process.env.p || 3001;
dbConnection();
app.use(cookieParser());
app.use("/api/v1", userRouter);

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});
