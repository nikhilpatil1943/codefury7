import express from 'express';
import { Alert } from '../db/models.js';

const router = express.Router();

// POST endpoint to create an alert
router.post('/', async (req, res) => {
    const { alertType, description, district } = req.body;

    if (!alertType || !description || !district) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    try {
        const newAlert = new Alert({ alertType, description, district });
        await newAlert.save();
        res.status(201).json({ message: 'Alert created successfully', alert: newAlert });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create alert.' });
    }
});

export default router;
