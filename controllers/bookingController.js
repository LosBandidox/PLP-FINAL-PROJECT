const Booking = require('../models/bookingModel'); // Import Booking model

// Fetch all bookings
const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll(); // Fetch all bookings from the database
        res.status(200).json(bookings); // Respond with bookings data
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

// Create a new booking
const createBooking = async (req, res) => {
    try {
        const { userId, busRoute, seatNumber, classType, date, paymentStatus } = req.body;
        const newBooking = await Booking.create({ userId, busRoute, seatNumber, classType, date, paymentStatus });
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createBooking,   // Export create booking function
    getAllBookings,  // Export fetch all bookings function
};
