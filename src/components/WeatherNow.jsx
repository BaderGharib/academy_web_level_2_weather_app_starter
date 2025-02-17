import React from "react";
import storm from "../../public/images/weather-icons/storm.svg";

export default function WeatherNow() {
  return (
    <>
      <div className="container">
        <div className="weather-now-section">
          <div className="weather-status-icon">
            <img src={storm} alt="Placeholder" />
          </div>
          <div className="details">
            <p className="temperature">
              <span>Temperature 10 to 11 C</span>
            </p>
            <p className="atmosphere">
              <span>Humidity 78%</span>
              <span>Pressure 1008.48</span>
            </p>
          </div>
        </div>
        {/* <div className="weather-over-24h-section"></div> */}
      </div>
    </>
  );
}
