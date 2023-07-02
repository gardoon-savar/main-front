import React from "react";
import styles from "./styles/index.module.scss";

const Button = ({ title, icon }) => {
  const iconBox =
    icon !== false ? <img src={icon} className={styles.icon} /> : "";

  return (
    <button className={styles.main}>
      {iconBox}
      {title}
    </button>
  );
};

export default Button;
