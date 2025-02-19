import React, { useEffect, useReducer, useState, useRef } from "react";
import Search from "./Search";
import clearIcon from "../../public/images/weather-icons/clear.svg";
import cloudyIcon from "../../public/images/weather-icons/cloudy.svg";
import drizzleIcon from "../../public/images/weather-icons/drizzle.svg";
import fogIcon from "../../public/images/weather-icons/fog.svg";
import mostlyCloudyIcon from "../../public/images/weather-icons/mostlycloudy.svg";
import partlyCloudyIcon from "../../public/images/weather-icons/partlycloudy.svg";
import rainIcon from "../../public/images/weather-icons/rain.svg";
import snowIcon from "../../public/images/weather-icons/snow.svg";
import stormIcon from "../../public/images/weather-icons/storm.svg";
import unknownIcon from "../../public/images/weather-icons/unknown.svg";

export default function WeatherNow() {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const allIcons = {
    "01d": clearIcon,
    "01n": clearIcon,

    "02d": cloudyIcon,
    "02n": cloudyIcon,

    "03d": cloudyIcon,
    "03n": cloudyIcon,

    "04d": drizzleIcon,
    "04n": drizzleIcon,

    "09d": rainIcon,
    "09n": rainIcon,

    "10d": rainIcon,
    "10n": rainIcon,

    "13d": snowIcon,
    "13n": snowIcon,
  };

  const weatherImage = {
    "clear sky": clearIcon,
    "few clouds": partlyCloudyIcon,
    "scattered clouds": mostlyCloudyIcon,
    "broken clouds": cloudyIcon,
    "overcast clouds": cloudyIcon,
    rain: rainIcon,
    snow: snowIcon,
    thunderstorm: stormIcon,
    drizzle: drizzleIcon,
  };

  const myapiKey = import.meta.env.VITE_APP_ID;
  const search = async function (city) {
    if (!city) return;
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myapiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      if (!res.ok) return;
      console.log(data);

      const weatherCondition = data.weather[0].description;
      const icon = weatherImage[weatherCondition] || unknownIcon;
      setWeatherData({
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: Math.floor(data.main.temp),
        minTemp: Math.floor(data.main.temp_min),
        maxTemp: Math.floor(data.main.temp_max),
        location: data.name,
        icon: icon,
        description: weatherCondition,
      });
    } catch (err) {
      setWeatherData(false);
      console.error(err);
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <div className="header">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type in a city name"
          className="search-bar"
        />
        <button onClick={() => search(inputRef.current.value)}>
          See Weather
        </button>
      </div>

      {weatherData ? (
        <>
          <div className="container">
            <div className="weather-now-section">
              <div className="weather-status-icon">
                <img src={weatherData.icon} alt={weatherData.description} />
                <p>{weatherData.description}</p>
              </div>
              <div className="details">
                <p className="temperature">
                  <span>
                    Temperature {weatherData.minTemp}° to {weatherData.maxTemp}
                    °C
                  </span>
                </p>
                <p className="atmosphere">
                  <span>Humidity {weatherData.humidity}%</span>
                  <span>Pressure {weatherData.pressure}</span>
                </p>
              </div>
            </div>
            {/* <div className="weather-over-24h-section"></div> */}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
