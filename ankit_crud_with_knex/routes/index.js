const express = require("express");
const controller = require("../controller/auth_controller");

const router = express.Router();
router.post("/insert", controller.InsertData);
router.put("./update/:id", controller.updateById);
router.get("");

module.exports = router;
