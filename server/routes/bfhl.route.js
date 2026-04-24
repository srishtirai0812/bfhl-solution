const express = require("express");
const router = express.Router();

const { processData } = require("../controllers/bfhl.controller");

router.post("/", processData);

module.exports = router;