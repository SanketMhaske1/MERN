const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res
        .status(400)
        .json({ status: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ status: false, message: "User already exists" });
    }

    let hashPassword = await bcrypt.hash(password, 10);

    if (!hashPassword) {
      return res
        .status(500)
        .json({ status: false, message: "Fail to hash password" });
    }

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      role,
    });

    return res.status(201).json({
      status: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Fail to create user",
      data: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ status: false, message: "All fields are required" });
    }

    let isUserExist = await User.findOne({ email });

    if (!isUserExist) {
      return res.status(401).json({ status: false, message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      isUserExist.password
    );
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid Password" });
    }
    const payload = {
      email: isUserExist.email,
      id: isUserExist._id,
      role: isUserExist.role,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    isUserExist = isUserExist.toObject();
    isUserExist.token = token;
    isUserExist.password = undefined;
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    };
    return res.cookie("token", token, options).status(200).json({
      status: true,
      message: "Login successfully",
      data: isUserExist,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Fail to login",
      data: error.message,
    });
  }
};
