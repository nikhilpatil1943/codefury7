import express from 'express';
import { Test } from '../db/models.js';

const router = express.Router();

// GET endpoint to fetch a test by _id
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const test = await Test.findById(id);
        if (!test) {
            return res.status(404).json({ error: 'Test not found.' });
        }
        res.status(200).json(test);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch test.' });
    }
});

export default router;
