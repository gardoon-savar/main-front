import React from "react";

import HeaderImage from "../image";

import image1 from "../../../assests/images/headerImage1.jpg";
import image2 from "../../../assests/images/headerImage2.jpg";
import image3 from "../../../assests/images/headerImage3.jpg";
import image4 from "../../../assests/images/headerImage4.jpg";
import image5 from "../../../assests/images/headerImage5.jpg";

import styles from "./styles/index.module.scss";

const imageList = [image1, image2, image3, image4, image5];

const HeaderImageBox = () => {
  return (
    <header className={styles.main}>
      <HeaderImage imageList={imageList} />
    </header>
  );
};

export default HeaderImageBox;
