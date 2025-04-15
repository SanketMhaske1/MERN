const Todo = require("../models/todo");

exports.getAllTodo = async (req, res) => {
  try {
    const response = await Todo.find({});
    res.status(200).json({
      message: "Successfully get all todos",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get all todos",
      error: error,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Todo.findById(id);

    if (!response) {
      res.status(404).json({
        message: "Id not found",
        error: response,
      });
    }

    res.status(200).json({
      message: "Successfully get todo",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to get todos",
      error: error,
    });
  }
};
