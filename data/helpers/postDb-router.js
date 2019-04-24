const express = require("express");

const Post = require("./postDb.js");

const router = express.Router();

router.get("/", (req, res) => {
  Post.get()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({ err: "nothing there" });
    });
});

module.exports = router;
