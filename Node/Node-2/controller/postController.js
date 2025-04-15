const Post = require("../model/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body, user } = req.body;
    const post = new Post({ title, body, user });
    const savePost = await post.save();

    return res.status(200).json({
      success: true,
      message: "Post created successfully",
      data: savePost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Fail to create post",
      data: error,
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const post = await Post.find().populate("like").populate("comment").exec();
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "No post found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Post fetched successfully",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Fail to get posts",
      data: error,
    });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id)
      .populate("like")
      .populate("comment")
      .exec();

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "post not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Post fetched successfully",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Fail to get post",
      data: error,
    });
  }
};
