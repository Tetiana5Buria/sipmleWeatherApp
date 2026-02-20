import type { WeatherData } from "../types/weather";
import styles from '../styles/WeatherCard.module.scss'
import { weatherIcons } from "../types/icons";

interface Props {
  weather: WeatherData;
}

export const WeatherCard = ({ weather }: Props) => {
      const iconCode = weather.weather[0].icon;
 const iconUrl = weatherIcons[iconCode];
   return (
    <div className={styles.card}>
      <h2 className={styles.mainText}>{weather.name}</h2>
      <img src={iconUrl} alt={weather.weather[0].description} className={styles.icon} />
      <p className={styles.temp}>{Math.round(weather.main.temp)}°C</p>
      <p className={styles.description}>{weather.weather[0].description}</p>

      <div className={styles.details}>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>


    </div>
  );
};
