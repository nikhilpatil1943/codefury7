import React, { useState } from 'react';
import axios from 'axios';
import styles from './alert.css'; // Assuming you create this CSS module

const AlertCard = () => {
    const [alert, setAlert] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchAlert = async () => {
        setLoading(true);
        setError('');

        try {
            const lat = 18.97024776829818; // Replace with actual latitude
            const lon = 73.08812693745676; // Replace with actual longitude

            const response = await axios.post('codefury7-1dg8.vercel.app/getAlertByLocation', { lat, lon });

            if (response.data.alerts) {
                setAlert(response.data.alerts[0]); // Assuming only one alert per district
            } else {
                setAlert(null);
            }
        } catch (error) {
            console.error('Error fetching alert:', error);
            setError('Failed to fetch alert.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.alertContainer}>
            <button onClick={fetchAlert}>Get Alert</button>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : alert ? (
                <div className={styles.alertCard}>
                    <h2>{alert.alertType} Alert</h2>
                    <p>{alert.description}</p>
                    <p>{alert.district}</p>
                </div>
            ) : (
                <p>No alerts for your location.</p>
            )}
        </div>
    );
};

export default AlertCard;
