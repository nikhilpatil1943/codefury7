const express = require('express');
const cors = require('cors'); // Import cors
const weatherRoute = require('./routes/weather');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use('/weather', weatherRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
