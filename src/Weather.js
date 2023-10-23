import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [temperatureUnit, setTemperatureUnit] = useState('Celsius'); // Default to Celsius

    useEffect(() => {
        // Make sure you replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual API key
        const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        if (city) {
            axios.get(apiUrl)
                .then((response) => {
                    setWeatherData(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching weather data:', error);
                });
        }
    }, [city]);

    const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(1);
    const kelvinToFahrenheit = (temp) => ((temp - 273.15) * 9 / 5 + 32).toFixed(1);

    let temperature = 'N/A';
    let description = 'N/A';

    if (weatherData) {
        temperature =
            temperatureUnit === 'Celsius'
                ? kelvinToCelsius(weatherData.main.temp)
                : kelvinToFahrenheit(weatherData.main.temp);
        description = weatherData.weather[0].description;
    }

    return (
        <div className="weather-container">
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter a city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div>
                <h2>Weather in {city}</h2>
                <p>Temperature: {temperature}° {temperatureUnit}</p>
                <p>Description: {description}</p>
                <div>
                    <label>Temperature Unit: </label>
                    <select value={temperatureUnit} onChange={(e) => setTemperatureUnit(e.target.value)}>
                        <option value="Celsius">Celsius</option>
                        <option value="Fahrenheit">Fahrenheit</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Weather;
