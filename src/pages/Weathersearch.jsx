import { useState } from "react";
import axios from "axios";

const API_KEY = "your_api_key"; // Replace with your OpenWeatherMap API key

function WeatherSearch({ addToHistory }) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await axios.get( "https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current_weather=true"

        // `https://api.openweathermap.org/data/2.5/weather?q=${b19f6bde4c9ce1698c95818ed6aed8cf
        // }&units=metric`
      );
      setWeather(response.data);
      addToHistory(city);
    } catch (error) {
      alert("City not found. Try again.");
    }
  };

  return (
    <div className="container">
      <h2>Search Weather</h2>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
      <button onClick={fetchWeather}>Search</button>

      {weather && (
        <div className="weather-info">
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherSearch;
