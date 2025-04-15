const mongoose = require("mongoose");
require("dotenv").config();

const databaseUrl = process.env.DB_URL;

const dbConnection = async (req, res) => {
  mongoose
    .connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("Database connection failed", err);
      process.exit(1); // Exit the process with failure
    });
};

module.exports = dbConnection;
