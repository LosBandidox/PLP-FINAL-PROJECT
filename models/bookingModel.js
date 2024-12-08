// models/booking.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./userModel");

const Booking = sequelize.define(
  "Booking",
  {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
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
      validate: {
        isIn: [["economy", "business", "first-class"]],
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    paymentStatus: {
      type: DataTypes.STRING,
      defaultValue: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

// Setting up associations
Booking.belongsTo(User, { foreignKey: "userId" });

module.exports = Booking;
