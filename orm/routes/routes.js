const insert = require("./../insert/insert");
const express = require("express");
const routes = express.Router();

routes.post("/post", insert.post);
routes.put("/put:id", insert.put);
routes.get("/get:id", insert.get);
routes.delete("/delete:id", insert.delete);

module.exports = routes;
