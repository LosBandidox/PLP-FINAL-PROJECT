//establishing the relationship between user & booking
// models/index.js

const User = require('./userModel');
const Booking = require('./bookingModel');

// Define associations
User.hasMany(Booking, { foreignKey: 'userId' });
Booking.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
    User,
    Booking,
};
