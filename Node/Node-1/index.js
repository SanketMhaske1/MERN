const express = require("express");
const dataBaseConnection = require("./config/database.js");
const router = require("./routers/todos.js");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
dataBaseConnection();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());

app.listen(PORT, (req, res) => {
  console.log("Server is running on port", PORT);
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Todo API</h1>");
});
app.use("/api/v1", router);
