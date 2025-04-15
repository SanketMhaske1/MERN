const mongoose = require("mongoose");
require("dotenv").config();

dbConnection = async () => {
  try {
    mongoose
      .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to database");
      })
      .catch((error) => {
        console.log("Failed to connect to database", error.message);
        process.exit(1);
      });
  } catch (error) {
    console.log("Error connecting to database", error.message);
  }
};

module.exports = dbConnection;
