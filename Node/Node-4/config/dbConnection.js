const mongoose = require("mongoose");
require("dotenv").config();

const database_url = process.env.DATABASE_URL;

const dbConnect = async (req, res) => {
  mongoose
    .connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log("Database connection failed", error);
      process.exit(1);
    });
};

module.exports = dbConnect;
