const express = require("express");
const router = express.Router();

const { signup, login } = require("../controller/auth");
const { auth, isStudent, isAdmin } = require("../middlewares/auth");

router.post("/signup", signup);
router.post("/login", login);

router.get("/test", auth, (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Welcome to test route",
    data: req.user,
  });
});

router.get("/student", auth, isStudent, (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Welcome Student",
    data: req.user,
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Welcome Admin",
    data: req.user,
  });
});

module.exports = router;
