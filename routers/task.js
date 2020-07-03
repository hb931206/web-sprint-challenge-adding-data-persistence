const express = require("express");
const db = require("../data/config");
// Add Task when you've developed your (/models/task)
// const Task =

const router = express.Router();

router.post("/tasks", async (req, res, next) => {
  try {
    const [id] = await db("task").insert(req.body);
    const taskPost = await db("task").where({ id }).first();
    res.status(201).json(taskPost);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
