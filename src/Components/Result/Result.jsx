
import styles from "./Result.module.css";

const Result = ({weather,units}) => {
 
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <h3>{weather.name},{weather.country}</h3>

        <img
          width="48"
          height="48"
          src={weather.iconURL}
          alt="weatherIcon"
        />
        <h3>{weather.description}</h3>
      </div>
      <div className={styles.temperature}>
        <h1>{weather.temp.toFixed()}°{units ==="metric" ? "C" : "F"}</h1>
      </div>
    </div>
  );
};
export default Result;
