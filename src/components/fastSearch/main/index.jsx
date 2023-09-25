import React from "react";

import InnerNavbar from "../innerNavbar";
import OuterNavBar from "../outerNavbar";
import FastTicketBuy from "../fastTicketBuy";

import styles from "./styles/index.module.scss";

const FastSearch = () => {
  return (
    <div className={styles.placingTheBox}>
      <div className={styles.main}>
        <OuterNavBar />
        <InnerNavbar />
        {/* <FastTicketBuy /> */}
      </div>
    </div>
  );
};

export default FastSearch;
