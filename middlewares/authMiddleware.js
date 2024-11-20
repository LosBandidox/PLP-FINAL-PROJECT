import { verify } from 'jsonwebtoken';
import { findById } from '../models/userModel';

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Not authorized, no token' });

    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        req.user = await findById(decoded.id).select('-password');
        next();
    } catch (error) {
        res.status(401).json({ message: 'Not authorized, token failed' });
    }
};

export default authMiddleware;
