import React from "react";

import header from "../../../assets/images/headerImage.png";

import styles from "./styles/index.module.scss";

const ImageBox = () => {
  return (
    <div className={styles.main}>
      <img src={header} className={styles.image} />
      <div className={styles.textBox}>
        <p>تجربه یک سفر لذت بخش با</p>
        <h1>گردون سوار</h1>
      </div>
    </div>
  );
};

export default ImageBox;
