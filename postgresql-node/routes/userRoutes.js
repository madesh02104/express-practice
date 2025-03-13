const express = require("express");
const {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsernames);
router.get("/new", createUsernameGet);
router.post("/new", createUsernamePost);

module.exports = router;
