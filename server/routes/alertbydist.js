import express from 'express';
import axios from 'axios';
import { Alert } from '../db/models.js';

const router = express.Router();

// POST endpoint to get alerts by location
router.post('/', async (req, res) => {
    const { lat, lon } = req.body;

    if (!lat || !lon) {
        return res.status(400).json({ error: 'Please provide both latitude and longitude.' });
    }

    try {
        // Fetch district information using Geoapify API
        const response = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=982d3e5c475a4565846e83b244b5e958`);
        const { state_district } = response.data.results[0];
        let state_district1=state_district.split(" ")[0].toLowerCase()

        // Find alerts in the database for the retrieved district
        const alerts = await Alert.find({ district: state_district1 });

        if (alerts.length > 0) {
            res.status(200).json({ alerts });
        } else {
            res.status(200).json({ message: 'No alerts found for your location.' });
        }
    } catch (error) {
        console.error('Error fetching alert:', error);
        res.status(500).json({ error: 'Failed to fetch alert.' });
    }
});

export default router;
