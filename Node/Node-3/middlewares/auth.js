const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    console.log(req.cookies.token);

    const token = req.header("Authorization").replace("Bearer ", "");
    //   req.body.token ||
    //   req.cookies.token ||
    //   req.header("authorization").replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Token not found ll",
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decoded;
    } catch (error) {
      return res.status(401).json({
        status: false,
        message: "Invalid token",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Fail to authenticate user",
      data: error.message,
    });
  }
};

exports.isStudent = async (req, res, next) => {
  try {
    const role = req.user.role;
    console.log(role);
    if (role !== "student") {
      return res.status(403).json({
        status: false,
        message: "You are not authorized to access this route",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Fail to authenticate as student",
      data: error.message,
    });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const role = req.user.role;
    if (role !== "Admin") {
      return res.status(403).json({
        status: false,
        message: "You are not authorized to access this route",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Fail to authenticate as admin",
      data: error.message,
    });
  }
};
