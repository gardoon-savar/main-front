import React from "react";
import styles from "./styles/index.module.scss";

const Selection = () => {
  return (
    <div className={styles.selection}>
      <select name="languages" id="lang">
        <option value="php">&nbsp;اکونومی</option>
        <option value="php">&nbsp;رفت و برگشت</option>
      </select>
      <img
        className={styles.selectIcon}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDklEQVR4nO2YSwrCMBRFA9WdqBtwAW9sg2ADDxNw3BU51okO/OyxEsVBsZ8Y2yTCPZBRaXpO0kFaIQAAAAAAQI3VZruQyszFP/pIZfZSmcqOXOkDEU1EJIhoIgt9fPtYN5fSqjYKc4kRQU95c/nw6doJe7HhhuAR1C7fHfCMqG9Z8AjqkLevdO8EzJzlSp+aJzC3ZVlOx5Jn5kwW5tz2bOcFjBHBQ8nHiOCh5UNG8FjyISJ4bHmXCFnou09EMPkxIoLLDxkRTX6IiOjyv0QkI+8TkZz8NxHJyrudHPX1NeKfcP13ItWV941IUt41Imn5voi/kH9jRe3XUyo/B7yx369r3s38ZwAAAAAAAKKDB4ciN1GiP5vwAAAAAElFTkSuQmCC"
      />
    </div>
  );
};

export default Selection;
