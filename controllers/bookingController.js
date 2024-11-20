import { create, find } from '../models/bookingModel';

// Create a booking
const createBooking = async (req, res) => {
    const { busRoute, seatNumber, classType, date } = req.body;
    try {
        const booking = await create({
            user: req.user.id,
            busRoute,
            seatNumber,
            classType,
            date,
        });
        res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all bookings for a user
const getBookings = async (req, res) => {
    try {
        const bookings = await find({ user: req.user.id });
        res.json(bookings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default { createBooking, getBookings };
