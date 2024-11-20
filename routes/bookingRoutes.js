import { Router } from 'express';
import { createBooking, getBookings } from '../controllers/bookingController';
import authMiddleware from '../middlewares/authMiddleware';
const router = Router();

// from db
router.post('/', authMiddleware, createBooking);
router.get('/', authMiddleware, getBookings);

export default router;
