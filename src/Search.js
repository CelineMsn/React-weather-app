import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDateTime";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function getWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      coords: response.data.coord,
    });
  }

  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCurrentLocation);
  }

  function searchCurrentLocation(position) {
    const currentCoords = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
    searchCity(currentCoords);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const searchedCity = `q=${city}`;
    searchCity(searchedCity);
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  function searchCity(location) {
    const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
    const apiKey = "6e2f14a60b2f5be57b160a6148235b2f";
    const apiUrl = `${apiEndpoint}${location}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(getWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="search-wrapper">
        <div className="Weather">
          <form id="search-form" onSubmit={handleSubmit}>
            <input
              type="button"
              value="Search"
              className="search-button"
              onClick={handleSubmit}
            />
            <input
              type="search"
              placeholder="Enter City"
              className="search-input"
              id="search-bar"
              autoFocus="on"
              onChange={handleCitySearch}
            />
            <input
              type="button"
              value="Current location"
              className="location-button"
              onClick={getLocation}
            />
          </form>
        </div>
        <div className="Search">
          <h1 className="city-name">{weatherData.city}</h1>
          <FormattedDate />
          <CurrentWeather data={weatherData} />
        </div>
        <hr />
        <Forecast coordinates={weatherData.coords} />
      </div>
    );
  } else {
    searchCity(city);
  }
}
