const { Register, Login, Logout, } = require("../Controllers/user.controller");
const express = require("express");
const verifyToken = require("../middleware/verifytoken");
const router = express.Router();

router.post("/register", Register);
router.post("/login", Login , verifyToken);
router.post("/logout", Logout);


module.exports = router;