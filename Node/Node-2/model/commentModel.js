const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  user: { type: String, require: true },
  body: { type: String, require: true },
});

module.exports = mongoose.model("Comment", commentSchema);
