const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Create a new booking
router.post('/bookings', bookingController.createBooking);

// Get booking details
router.get('/bookings/:id', bookingController.getBooking);

module.exports = router;


