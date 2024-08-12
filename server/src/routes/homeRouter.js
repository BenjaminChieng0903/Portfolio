const express = require("express");
const homeActions = require("../controller/homeController");

const router = express.Router();

/* 
 * Landing Page Route - Home for Firebase
 * @route GET /home
 */
router.get("/ping", homeActions.ping);

module.exports = router;