const Like = require("../model/likeModel");

exports.likePost = async (req, res) => {
  try {
    console.log(req.body);
    const { post, user } = req.body;
    const like = new Like({ post, user });
    const saveLike = await like.save();
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: saveLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();
    console.log(req.body);
    console.log(updatedPost);
    return res.status(200).json({
      success: true,
      message: "Post liked successfully",
      data: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Fail to like post",
      data: error,
    });
  }
};
