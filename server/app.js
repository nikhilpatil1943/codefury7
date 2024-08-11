import express from 'express';
import cors from 'cors';
import weatherRoute from './routes/weather.js';
import loginRoute from './routes/login.js';
import connectDB from './db/db1.js';
import testroute from './routes/tests.js'
import alertroute from './routes/alerts.js'
import testr from './routes/alltest.js'
import testp from './routes/testbyid.js'
import alertbydist from './routes/alertbydist.js'



const app = express();

connectDB();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON

app.use('/weather', weatherRoute);
app.use('/login', loginRoute);
app.use('/createalert', alertroute); // Use the alert route
app.use('/createtest', testroute); // Use the test route
app.use('/tests',testr)
app.use('/tests',testp)
app.use('/getAlertByLocation',alertbydist)



export default app;
