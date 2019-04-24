const express = require("express");

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

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  User.getUserPosts(userId)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({ err: "no post by the id" });
    });
});
module.exports = router;
