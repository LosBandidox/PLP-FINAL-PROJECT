const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    busRoute: { type: String, required: true },
    seatNumber: { type: String, required: true },
    classType: { type: String, required: true },
    date: { type: Date, required: true },
    paymentStatus: { type: String, default: 'Pending' },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Booking', bookingSchema);
