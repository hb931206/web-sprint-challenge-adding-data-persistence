const express = require("express");
const db = require("../data/config");

const Task = require("../model/task");

const router = express.Router();

router.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

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
