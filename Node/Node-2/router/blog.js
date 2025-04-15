const express = require("express");
const router = express.Router();

const { createComment } = require("../controller/CommentController");
const {
  createPost,
  getAllPosts,
  getPostById,
} = require("../controller/PostController");
const { likePost } = require("../controller/LikeController");

router.post("/comment", createComment);
router.post("/post", createPost);
router.get("/posts", getAllPosts);
router.get("/post/:id", getPostById);
router.post("/like", likePost);

module.exports = router;
