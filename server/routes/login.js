import express from 'express';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from .env file

const router = express.Router();
const { LOGIN_USERNAME, LOGIN_PASSWORD } = process.env;

// POST endpoint for login
router.post('/', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Please provide both username and password.' });
    }

    if (username === LOGIN_USERNAME && password === LOGIN_PASSWORD) {
        return res.status(200).json({ message: 'Login successful.' });
    } else {
        return res.status(401).json({ error: 'Invalid username or password.' });
    }
});

export default router;
