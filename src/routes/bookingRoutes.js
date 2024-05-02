// bookingRoutes.js

const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
const { verifyToken } = require("../middleware/authMiddleware");

// Book a seat (protected with JWT token)
router.post("/book", verifyToken, bookingController.bookSeat);

// Get specific booking details (protected with JWT token)
router.get("/:bookingId", verifyToken, bookingController.getBookingDetails);

module.exports = router;
