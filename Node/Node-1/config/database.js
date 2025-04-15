const mongoose = require("mongoose");
require("dotenv").config();

const dataBase_url = process.env.DATABASE_URL;

const dataBaseConnection = () => {
  mongoose
    .connect(dataBase_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.error("Database connection failed:", error);
      process.exit(1); // Exit the process with failure
    });
};

module.exports = dataBaseConnection;
