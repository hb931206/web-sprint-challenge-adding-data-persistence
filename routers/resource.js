const express = require("express");
const db = require("../data/config");
const Resource = require("../model/resource");

const router = express.Router();

router.get("/resources", async (req, res, next) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

router.post("/resources", async (req, res, next) => {
  try {
    const [id] = await db("resource").insert(req.body);
    const resPost = await db("resource").where({ id }).first();
    res.status(201).json(resPost);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
