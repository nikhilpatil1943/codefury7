import express from 'express';
import { Test } from '../db/models.js';

const router = express.Router();

// POST endpoint to create a test
router.post('/', async (req, res) => {
    const { questions } = req.body;

    if (!questions || !Array.isArray(questions)) {
        return res.status(400).json({ error: 'Please provide a valid questions array.' });
    }

    try {
        const formattedQuestions = questions.map((q) => {
            if (!q.question || !Array.isArray(q.options) || q.correctOption === undefined) {
                throw new Error('Invalid question format');
            }
            return {
                question: q.question,
                options: q.options,
                correctOption: q.correctOption,
            };
        });

        const newTest = new Test({ questions: formattedQuestions });
        await newTest.save();
        res.status(201).json({ message: 'Test created successfully', test: newTest });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create test.' });
    }
});

export default router;
