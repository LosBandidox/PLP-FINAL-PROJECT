// Import necessary dependencies
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes'); // Import booking routes
const { User, Booking } = require('./models'); // Import models to sync
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Test database connection and sync models
sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
        return sequelize.sync(); // Sync all models
    })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Define routes
app.use('/api', userRoutes);
app.use('/api', bookingRoutes);

// Example route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
