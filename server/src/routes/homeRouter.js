const express = require("express");
const homeActions = require("../controller/homeController");

const router = express.Router();

/* 
 * Landing Page Route - Home for Firebase
 * @route GET /home
 */
router.post("/submit", homeActions.submitEnquiry);

module.exports = router;