// / controllers/bookingController.js

const { body, validationResult } = require("express-validator");
const Booking = require("../models/bookingModel");

// Middleware for validating booking data
const validateBooking = [
  body("userId").notEmpty().withMessage("User ID is required"),
  body("busRoute").notEmpty().withMessage("Bus route is required"),
  body("seatNumber")
    .isInt({ min: 1 })
    .withMessage("Seat number must be a positive integer"),
  // Add additional validations as needed
];

// Create a new booking
const createBooking = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { userId, busRoute, seatNumber, classType, date, paymentStatus } =
      req.body;
    const newBooking = await Booking.create({
      userId,
      busRoute,
      seatNumber,
      classType,
      date,
      paymentStatus,
    });
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get booking details
const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createBooking,
  getBooking,
  validateBooking,
};
