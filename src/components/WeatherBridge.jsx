import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherBridge = () => {
  const [weather, setWeather] = useState({ temp: '14', condition: 'Synced' }); // Default fallback

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Use a working key or your own. 
        const API_KEY = '895284fb2d2c1d9a30d2482451f93006'; 
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Dunedin,nz&units=metric&appid=${API_KEY}`);
        
        const temp = Math.round(res.data.main.temp);
        const condition = res.data.weather[0].main;
        
        setWeather({ temp, condition });

        // Update Global Theme
        let themeColor = '#00f2ff';
        if (condition === 'Rain') themeColor = '#0066ff';
        if (condition === 'Clear') themeColor = '#ffaa00';
        document.documentElement.style.setProperty('--primary', themeColor);
      } catch (e) {
        console.warn("Weather API Limit or Error - Using System Default");
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="system-status-bar">
      <div className="status-dot"></div>
      <span className="status-text">OTAGO_NZ: {weather.temp}°C // {weather.condition.toUpperCase()}</span>
    </div>
  );
};

export default WeatherBridge;