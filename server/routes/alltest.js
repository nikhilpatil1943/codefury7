import express from 'express';
import { Test } from '../db/models.js';

const router = express.Router();

// GET endpoint to list all tests
router.get('/', async (req, res) => {
    try {
        const tests = await Test.find({});
        res.status(200).json(tests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch tests.' });
    }
});

export default router;
