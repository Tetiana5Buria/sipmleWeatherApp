import type { WeatherData } from "../types/weather";

const API_KEY = import.meta.env.VITE_API_KEY as string;
const BASE_URL = import.meta.env.VITE_API_URL as string;
/* console.log(API_KEY); */

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  /*  console.log(
    "URL:",
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  ); */

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "City not found");
  }

  return response.json();
};
