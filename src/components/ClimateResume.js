import { useEffect, useState } from "react";
import { ClimateResumeContainer } from "../style/style";
import axios from "axios";

export default function ClimateResume({ name, lat, lon, searchState }) {
  const API_KEY = "0cd0669390d2610bbed832494448330e";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const [weather, setWeather] = useState();

  useEffect(() => {
    const getWeather = async () => {
      try {
        const result = await axios.get(
          `${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );

        setWeather(result.data);
      } catch (error) {
        window.alert(error.message);
      }
    };

    if (searchState === true) {
      getWeather();
    }
  }, [searchState]);

  return (
    <ClimateResumeContainer>
      <div>
        <p>Agora: {name}</p>
        <p>Mínima: {weather.main.temp_min}</p>
        <p>Máxima: {weather.main.temp_max}</p>
      </div>
      <div>
        <p>{weather.weather.main}</p>
        <h1>{weather.main.temp}</h1>
      </div>
    </ClimateResumeContainer>
  );
}
