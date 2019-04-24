const express = require("express");
const postDbRouter = require("./data/helpers/postDb-router.js");

const server = express();
server.use(express.json());

server.use("/api/posts", postDbRouter);

module.exports = server;
