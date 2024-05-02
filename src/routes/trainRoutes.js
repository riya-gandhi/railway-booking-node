// trainRoutes.js

const express = require("express");
const router = express.Router();
const trainController = require("../controllers/trainController");
const { verifyApiKey } = require("../middleware/apiKeyMiddleware");

// Add a new train (protected with API key)
router.post("/add", verifyApiKey, trainController.addTrain);

module.exports = router;
