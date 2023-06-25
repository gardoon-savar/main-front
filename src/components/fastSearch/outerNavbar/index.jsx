import React from "react";

import Tab from "../tab";
import styles from "./styles/index.module.scss";

const OuterNavBar = () => {
  return (
    <ul className={styles.main}>
      <Tab title="داخلی" />
      <Tab title="خارجی" />
    </ul>
  );
};

export default OuterNavBar;
