const express = require("express");
const homeRouter = require("./homeRouter");

const router = express.Router();

router.use('/home', homeRouter);

module.exports = router;