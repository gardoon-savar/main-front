import React from "react";
import styles from "./styles/index.module.scss";

import HeaderImage from "../header-image";

import image1 from "../../assests/images/traditional1.jpg";
import image2 from "../../assests/images/traditional2.jpg";
import image3 from "../../assests/images/traditional3.jpg";
import image4 from "../../assests/images/traditional4.jpg";
import image5 from "../../assests/images/traditional5.jpg";

const imageList = [image1, image5, image3, image4, image2];

const HeaderImageBox = () => {
  return (
    <header className={styles.main}>
      <HeaderImage imageList={imageList} />
    </header>
  );
};

export default HeaderImageBox;
