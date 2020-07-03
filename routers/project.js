const express = require("express");
const db = require("../data/config");
const Project = require("../model/project");

const router = express.Router();

router.get("/projects", async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.post("/projects", async (req, res, next) => {
  try {
    const [id] = await db("project").insert(req.body);
    const projPost = await db("project").where({ id }).first();
    res.status(201).json(projPost);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
