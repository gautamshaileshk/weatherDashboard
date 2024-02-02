import styles from "./App.module.css";
import Result from "./Components/Result/Result";
import Search from "./Components/Search/Search";
import cold from "./../assets/cold.jpg";
import hot from "./../assets/hot.jpg";
import Description from "./Components/Description/Description";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";
import NoInternt from "./Components/NoInternetConnection/NoInternet";

function App() {
  const [bg, setBg] = useState(hot);
  const [city, setCity] = useState("Mau");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      console.log(data);
      setWeather(data);
      const threshold = units === "metric" ? 20 : 60;
      if (data.temp <= threshold) setBg(cold);
      else setBg(hot);
    };
    fetchWeatherData();
  }, [units, city]);

  return (
    <div className={styles.app} style={{ backgroundImage: `url(${bg})` }}>
    <NoInternt>
      <div className={styles.overlay}>
        {weather && (
          <div className={styles.container}>
            <Search setCity={setCity} setUnits={setUnits} />
            <Result weather={weather} units={units} />
            <Description weather={weather} units={units} />
          </div>
        )}
      </div>
      </NoInternt>
    </div>
  );
}

export default App;
