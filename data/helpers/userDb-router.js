const express = require("express");
const Post = require("./postDb.js");
const User = require("./userDb.js");

const router = express.Router();

router.get("/", (req, res) => {
  User.get()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ err: "no getting" });
    });
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  User.getById(userId)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ err: "no getting by id bro" });
    });
});

router.post("/", (req, res) => {
  const newUser = req.body;
  User.insert(newUser)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({ err: "no posting bro" });
    });
});

router.get("/:id/posts", (req, res) => {
  const userId = req.params.id;
  User.getUserPosts(userId)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({ err: "no post by the id" });
    });
});

router.put("/:id", (req, res) => {
  const userId = req.params.id;
  const userBody = req.body;
  User.update(userId, userBody)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ err: "cannot update bro" });
    });
});

router.delete("/:id", (req, res) => {
  const userId = req.params.id;
  User.remove(userId)
    .then(user => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({ err: "no deleting bro" });
    });
});
module.exports = router;
