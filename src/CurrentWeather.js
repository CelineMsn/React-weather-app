import React, { useState } from "react";

import "./CurrentWeather.css";

export default function CurrentTemp(props) {
  const [unit, setUnit] = useState("metric");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "imperial") {
    return (
      <div className="CurrentWeather">
        <div className="row">
          <h3 className="current-weather-conditions">
            {props.data.description}
          </h3>
        </div>
        <div className="flex">
          <div className="flex-right me-4">
            <img
              src={`./images/${props.data.icon}.png`}
              alt={props.data.description}
              className="current-weather-image"
            />
          </div>
          <div className="flex-right">
            <h5 className="temp-column current-temp">
              {Math.round(props.data.temperature)}
            </h5>
          </div>
          <div className="flex-left">
            <h5 className="units-column">
              <a
                href="/"
                className="fahrenheit active-link"
                onClick={showFahrenheit}
              >
                °F
              </a>
            </h5>
            <h5>
              <a
                href="/"
                className="celsius non-active-link"
                onClick={showCelsius}
              >
                °C
              </a>
            </h5>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <ul>
              <li className="feels-like-temp text-capitalize">
                feels like: {Math.round(props.data.feelsLike)}℉
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li className="humidity text-capitalize">
                humidity: {props.data.humidity}%
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li className="wind text-capitalize">
                wind: {Math.round(props.data.wind)} mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CurrentWeather">
        <div className="row">
          <h3 className="current-weather-conditions">
            {props.data.description}
          </h3>
        </div>
        <div className="flex">
          <div className="flex-right me-4">
            <img
              src={`./images/${props.data.icon}.png`}
              alt={props.data.description}
              className="current-weather-image"
            />
          </div>

          <div className="flex-right">
            <h5 className="temp-column current-temp">
              {Math.round(((props.data.temperature - 32) * 5) / 9)}
            </h5>
          </div>
          <div className="flex-left">
            <h5 className="units-column">
              <a
                href="/"
                className="fahrenheit non-active-link"
                onClick={showFahrenheit}
              >
                °F
              </a>
            </h5>
            <h5>
              <a href="/" className="celsius active-link" onClick={showCelsius}>
                °C
              </a>
            </h5>
          </div>
        </div>

        <div className="row">
          <div className="col-4 weather-left">
            <ul>
              <li className="feels-like-temp text-capitalize">
                feels like: {Math.round(((props.data.feelsLike - 32) * 5) / 9)}℃
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li className="humidity text-capitalize">
                humidity: {props.data.humidity}%
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li className="wind text-capitalize">
                wind: {Math.round(props.data.wind * 1.609344)} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
