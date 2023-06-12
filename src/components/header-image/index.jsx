import React from "react";
import styles from "./styles/index.module.scss";

const HeaderImage = ({ imageList }) => {
  return imageList.map((image) => (
    <div className={styles.imageBox}>
      <img src={image} />
    </div>
  ));
};

export default HeaderImage;
