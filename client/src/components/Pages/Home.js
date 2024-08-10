import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

export const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          // Fetch weather data from the API
          axios
            .get(`http://localhost:5000/weather?lat=${lat}&lon=${lon}`)
            .then((response) => {
              setWeatherData(response.data);
            })
            .catch((error) => {
              console.error("Error fetching the weather data", error);
            });
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-container">
      <div className="weather-block location-block">
        <h2>{weatherData.location.name}</h2>
        <p>{weatherData.location.region}, {weatherData.location.country}</p>
      </div>
      <div className="weather-block condition-block">
        <img src={weatherData.current.condition.icon} alt="weather icon" />
        <p>{weatherData.current.condition.text}</p>
      </div>
      <div className="weather-block temp-wind-block">
        <p>Temp: {weatherData.current.temp_c}°C</p>
        <p>Wind: {weatherData.current.wind_kph} kph</p>
      </div>
      <div className="weather-block humidity-block">
        <p>Humidity: {weatherData.current.humidity}%</p>
      </div>
    </div>
  );
};
