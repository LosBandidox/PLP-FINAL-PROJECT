// models/booking.js
//seqeulize is an orm that allows you ti interact with the database using javascript
// instead of raw mysql queries
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel'); // Import the User model to set up associations
//
const Booking = sequelize.define('Booking', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false,
    },
    busRoute: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    seatNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    classType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    paymentStatus: {
        type: DataTypes.STRING,
        defaultValue: 'Pending',
    }
}, {
    timestamps: true,
});

module.exports = Booking;

