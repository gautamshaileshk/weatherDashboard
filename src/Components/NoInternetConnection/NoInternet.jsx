import styles from "./NoInternet.module.css";
import { useEffect, useState } from "react";

const NoInternt = (props) => {
  const [isOnline, setOnline] = useState(true);
  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  window.addEventListener("online", () => {
    setOnline(true);
  });

  window.addEventListener("offline", () => {
    setOnline(false);
  });
  if (isOnline) {
    return props.children;
  } else {
    return <div className={styles.error}>
      <p>No Internet .....</p>
    </div>
  }
};
export default NoInternt;
