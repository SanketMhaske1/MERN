const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 50 },
  body: { type: String, required: true, trim: true, maxLength: 500 },
  like: [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }],
  comment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Post", postSchema);
