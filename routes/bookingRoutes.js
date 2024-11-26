
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Route to fetch all bookings
router.get('/bookings', bookingController.getAllBookings);

// Route to create a new booking
router.post('/bookings', bookingController.createBooking);
// Get booking details
router.get('/bookings/:id', bookingController.getBooking);

module.exports = router;


