import { create, findOne } from '../models/userModel';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

// Register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await hash(password, 10);
        const user = await create({ name, email, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await findOne({ email });
        if (user && (await compare(password, user.password))) {
            const token = sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default { registerUser, loginUser };
