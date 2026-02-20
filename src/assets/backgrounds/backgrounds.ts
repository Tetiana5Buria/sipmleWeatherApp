import sun from "../backgrounds/sun.avif";
import clouds from "../backgrounds/clouds.avif";
import rain from "../backgrounds/rain.avif";
import snow from "../backgrounds/snow.avif";
import thunderstorm from "../backgrounds/thunderstorm.avif";
import mist from "../backgrounds/mist.avif";
import defaultBg from "../backgrounds/default.avif";

export const weatherBackgrounds: Record<string, string> = {
  Clear: sun,
  Clouds: clouds,
  Rain: rain,
  Snow: snow,
  Thunderstorm: thunderstorm,
  Mist: mist,
  Default: defaultBg,
};
