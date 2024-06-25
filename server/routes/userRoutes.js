const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/electroboom", userController.createUser);

module.exports = router;
