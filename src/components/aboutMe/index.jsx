import React from "react";

// import image from "../../assets/images/aboutMe.png";
import styles from "./styles/index.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.header}>درباره ما</h2>
      <figure className={styles.figure}>
        {/* <img className={styles.image} src={image} /> */}
        <figcaption className={styles.caption}>
          <ul className={styles.navbar}>
            <li className={styles.item}>
              <span className={styles.title}>درباره ما</span>
              <div className={styles.border}></div>
            </li>
            <li className={styles.item}>
              <span className={styles.title}>پشتیبانی</span>
              <div className={styles.border}></div>
            </li>
            <li className={styles.item}>
              <span className={styles.title}>تیم فنی</span>
              <div className={styles.border}></div>
            </li>
          </ul>
          <p className={styles.text}>
            این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه
            است. این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه است. این یک متن
            نمونه است. این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه است. این یک
            متن نمونه است. این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه است. این
            یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه است.
            این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه
            است. این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه است. این یک متن نمونه است.
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default AboutMe;
