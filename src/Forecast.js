import React, { useState, useEffect } from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function getResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  function getForecast() {
    const apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall?";
    const apiKey = "10e90b2578584c3e1497c69c4fcaf030";
    const apiUrl = `${apiEndpoint}lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(getResponse);
  }
  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function(dayForecast, index) {
            if (index < 5) {
              return (
                <div className="col card-column" key={index}>
                  <DailyForecast forecastData={dayForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    getForecast();
  }
}
