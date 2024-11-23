
// controllers/userController.js

const User = require('../models/userModel');

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

// Export the controller functions
module.exports = {
    createUser,
    // Add other CRUD operations here as needed
};
