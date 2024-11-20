import { Schema, model } from 'mysql';

const bookingSchema = Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    busRoute: { type: String, required: true },
    seatNumber: { type: String, required: true },
    classType: { type: String, required: true },
    date: { type: Date, required: true },
    paymentStatus: { type: String, default: 'Pending' },
}, {
    timestamps: true,
});

export default model('Booking', bookingSchema);
