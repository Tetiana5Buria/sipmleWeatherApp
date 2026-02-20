// icons.ts
import clear from "../assets/clear.png";
import clouds from "../assets/clouds.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import thunderstorm from "../assets/thunderstorm.png";
/* import mist from "./assets/mist.png"; */

export const weatherIcons: Record<string, string> = {
  "01d": clear,
  "01n": clear,
  "02d": clouds,
  "02n": clouds,
  "03d": clouds,
  "03n": clouds,
  "04d": clouds,
  "04n": clouds,
  "09d": rain,
  "09n": rain,
  "10d": rain,
  "10n": rain,
  "11d": thunderstorm,
  "11n": thunderstorm,
  "13d": snow,
  "13n": snow,
  /* "50d": mist,
  "50n": mist, */
};
