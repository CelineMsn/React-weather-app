import React from "react";

export default function DailyForecast(props) {
  console.log(props.forecastData);
  function formatForecastDay() {
    const date = new Date(props.forecastData.dt * 1000);
    const weekdays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const forecastDay = weekdays[date.getDay()];
    return forecastDay;
  }

  function maxTemp() {
    const maxTemperature = Math.round(
      ((props.forecastData.temp.max - 32) * 5) / 9
    );
    return `${maxTemperature}°`;
  }

  function minTemp() {
    const minTemperature = Math.round(
      ((props.forecastData.temp.min - 32) * 5) / 9
    );
    return `${minTemperature}°`;
  }

  return (
    <div className="">
      <h5 className="card-title">{formatForecastDay()}</h5>
      <div className="card">
        <span className="forecast-temp-max">{maxTemp()}</span>
        <span className="forecast-temp-min">{minTemp()}</span>
        <img
          src={`./images/${props.forecastData.weather[0].icon}.png`}
          alt={props.forecastData.weather[0].description}
          className="forecast-weather-image"
        />
      </div>
    </div>
  );
}
