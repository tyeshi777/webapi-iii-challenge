const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const postDbRouter = require("./data/helpers/postDb-router.js");
const userDbRouter = require("./data/helpers/userDb-router.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan());

server.use("/api/posts", postDbRouter);
// server.use("/api/users", restricted, only("gina"), userDbRouter);
server.use("/api/users", upperCased, userDbRouter);

function upperCased(req, res, next) {
  console.log(req.headers.name);
}
// function restricted(req, res, next) {
//   const password = req.headers.password;
//   if (password === "tashi") {
//     next();
//   } else {
//     res.status(401).send("you shall not pass!");
//   }
// }

// function only(name) {
//   return function(req, res, next) {
//     if (name === req.headers.name) {
//       name = name.toUpperCase();
//       next();
//     } else {
//       res.status(403).send("you shall not pass!");
//     }
//   };
// }

module.exports = server;
