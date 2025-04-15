const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getAllTodo, getTodoById } = require("../controllers/getAllTodo");
const { updatedTodo } = require("../controllers/updatedTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

router.post("/create", createTodo);
router.get("/getAll", getAllTodo);
router.get("/get/:id", getTodoById);
router.put("/update/:id", updatedTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
