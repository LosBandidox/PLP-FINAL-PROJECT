import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { json } from 'body-parser';
import connectDB from './config/db';

// Load environment variables
config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
