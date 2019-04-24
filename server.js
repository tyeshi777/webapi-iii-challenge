const express = require("express");
const postDbRouter = require("./data/helpers/postDb-router.js");
const userDbRouter = require("./data/helpers/userDb-router.js");

const server = express();
server.use(express.json());

server.use("/api/posts", postDbRouter);
server.use("/api/users", userDbRouter);

module.exports = server;
