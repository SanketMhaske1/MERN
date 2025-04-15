const Todo = require("../models/todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const response = await Todo.create({ title, description });
    res
      .status(200)
      .json({ message: "Successfully create todo", data: response });
  } catch (err) {
    console.log("Failed to create todo", err);
    res.status(500).json({ message: "Failed to create todo", error: err });
  }
};
