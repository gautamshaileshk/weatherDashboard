import { useState } from "react";
import styles from "./Search.module.css";
const Search = ({ setCity, setUnits }) => {
  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    console.log(currentUnit);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyDown = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };
  return (
    <div className={styles.container}>
      <input
        onKeyDown={enterKeyDown}
        type="text"
        name="city"
        className={styles.input}
        placeholder="Enter City ..."
      />
      <button onClick={(e) => handleUnitsClick(e)} className={styles.btn}>
        °F
      </button>
    </div>
  );
};

export default Search;
