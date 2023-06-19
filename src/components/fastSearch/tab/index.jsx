import React from "react";

import styles from "./styles/index.module.scss";

const Tab = ({ title }) => {
  let eachTabStyle =
    title == "داخلی" ? styles.inCountryLable : styles.outCountryLable;

  return (
    <li className={`${styles.tab} ${eachTabStyle}`}>
      <span>{title}</span>
    </li>
  );
};

export default Tab;
