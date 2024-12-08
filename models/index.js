// models/index.js

// Import the models
const User = require("./userModel");
const Booking = require("./bookingModel");

// Establish relationships between the models
User.hasMany(Booking, { foreignKey: "userId" });
Booking.belongsTo(User, { foreignKey: "userId" });

module.exports = {
  User,
  Booking,
};
