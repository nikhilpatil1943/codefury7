import express from 'express';
import axios from 'axios';

const router = express.Router();
const API_KEY = '789b8db1e9e449d59c7104836241008';  // Your API key for WeatherAPI

// GET endpoint to fetch weather data by latitude and longitude
router.get('/', async (req, res) => {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
        return res.status(400).json({ error: 'Please provide both latitude and longitude.' });
    }

    try {
        const weatherApiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}`;
        const response = await axios.get(weatherApiUrl);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch weather data.' });
    }
});

export default router;
