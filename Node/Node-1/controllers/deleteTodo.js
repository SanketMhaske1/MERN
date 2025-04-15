const Todo = require("../models/todo");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const findTodo = await Todo.findById(id);

    if (!findTodo) {
      return res.status(404).json({
        message: "id not found",
        error: findTodo,
      });
    }

    const response = await Todo.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Successfully deleted todo",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete todo",
      error: error,
    });
  }
};
