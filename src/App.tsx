import { useState } from "react";
import { Search } from "./components/Search";
import { WeatherCard } from "./components/WeatherCard";
import { fetchWeather } from "./services/weatherApi";
import type { WeatherData } from "./types/weather";
import { weatherBackgrounds } from "./assets/backgrounds/backgrounds";
import styles from './styles/WeatherCard.module.scss';
import  './styles/global.scss';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [background, setBackground] = useState(weatherBackgrounds.Default);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWeather(city);
      setWeather(data);
      const mainWeather = data.weather[0].main;
      setBackground(weatherBackgrounds[mainWeather] || weatherBackgrounds.Default);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError("City not found");
      setWeather(null);
      setBackground(weatherBackgrounds.Default);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper"
       style={{
    backgroundImage: `url(${background})`,

  }}
    >
      <h1 className={styles.mainText}> Simple Weather App by React</h1>

      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
