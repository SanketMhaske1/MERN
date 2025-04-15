const Todo = require("../models/todo");

exports.updatedTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const findTodo = await Todo.findById(id);

    if (!findTodo) {
      return res.status(404).json({
        message: "Id not found",
        error: findTodo,
      });
    }

    const response = await Todo.findByIdAndUpdate(
      id,
      { title, description, updatedAt: Date.now() },
      { new: true }
    );

    return res.status(200).json({
      message: "Successfully updated todo",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update todo",
      error: error,
    });
  }
};
