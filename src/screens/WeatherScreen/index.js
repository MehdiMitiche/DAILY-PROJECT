import React from "react";
import "./weather.css";
import Weather from "./components/Weather";

const WeatherScreen = () => {
  return (
    <div>
      <div className="page-content">
        <Weather />
      </div>
    </div>
  );
};

export default WeatherScreen;
