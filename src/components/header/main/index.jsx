import React from "react";

import Navbar from "../navbar";
import ImageBox from "../imageBox";

import styles from "./styles/index.module.scss";

const Header = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.imageBox}>
        <ImageBox />
      </div>
    </div>
  );
};

export default Header;
