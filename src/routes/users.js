const express = require("express");
const routerUser = express.Router(); // { métodos }

// localhost:3001/user
routerUser.get("/", (req, res) => {
  return res.status(200).send("Route: GET /user");
});

module.exports = routerUser;