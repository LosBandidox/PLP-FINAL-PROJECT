const User = require('../models/userModel'); // Import User model

// Fetch all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll(); // Fetch all users from the database
        res.status(200).json(users); // Respond with users data
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

// Create a new user
const createUser = async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body;
        const newUser = await User.create({ name, email, password, isAdmin });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createUser,  // Export create user function
    getAllUsers, // Export fetch all users function
};
