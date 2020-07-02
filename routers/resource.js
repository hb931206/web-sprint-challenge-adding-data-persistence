const express = require("express");
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

module.exports = router;
