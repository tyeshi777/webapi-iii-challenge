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

router.get("/:id", (req, res) => {
  const postId = req.params.id;
  Post.getById(postId)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({ err: "cannot get by id" });
    });
});

router.post("/", (req, res) => {
  const newPost = req.body;
  Post.insert(newPost)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(500).json({ err: "cannot insert" });
    });
});

router.put("/", (req, res) => {
  const postId = req.params.id;
  const postBody = req.body;
  Post.update(postId, postBody)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({ err: "no updating bro" });
    });
});
router.delete("/:id", (req, res) => {
  const postId = req.params.id;
  Post.remove(postId)
    .then(post => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({ err: "cannot delete" });
    });
});
module.exports = router;
