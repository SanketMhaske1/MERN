const Comment = require("../model/commentModel");
const Post = require("../model/postModel");

exports.createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;
    const comment = new Comment({ post, user, body });
    const saveComment = await comment.save();
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: saveComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();

    return res.satus(200).json({
      success: true,
      message: "Comment created successfully",
      data: updatedPost,
    });
  } catch (error) {
    return res.satus(500).json({
      success: false,
      message: "Fail to created comment",
      data: error,
    });
  }
};
