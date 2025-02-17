export default function WeatherNow() {
  return (
    <>
      <div className="container">
        <div className="weather-now-section">
          <div className="weather-status-icon">
            <img src="https://placehold.co/600x400" alt="Placeholder" />
            <div className="details">
              <p>
                <span>Temperature</span>
                <span>10 to 11 C</span>
              </p>
              <p>
                <span>Humidity</span> <span>78%</span>
                <span>Pressure</span> <span>1008.48</span>
              </p>
            </div>
          </div>
        </div>
        <div className="weather-over-24h-section"></div>
      </div>
    </>
  );
}
