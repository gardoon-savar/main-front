import React from "react";
import styles from "./styles/index.module.scss";

const Button = ({ title }) => {
  return <button className={styles.main}>{title}</button>;
};

export default Button;
