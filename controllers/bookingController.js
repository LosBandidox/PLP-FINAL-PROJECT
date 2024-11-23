const Booking = require('../models/bookingModel');

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

// Get booking details
const getBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Export the controller functions
module.exports = {
    createBooking,
    getBooking,
};
