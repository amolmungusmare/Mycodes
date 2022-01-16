const express = require("express");
const route = express.Router();
const { AccessToken } = require("../auth/index");
const { insertData, loginData, getById } = require("../controller/db.Auth");

route.post("/insert", insertData);
route.post("/login", loginData);
route.get("/:id", AccessToken, getById);

module.exports = route;
