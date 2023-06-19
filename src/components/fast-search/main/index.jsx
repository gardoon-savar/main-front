import React from "react";

import InnerNavbar from "../inner-navbar";
import OuterNavBar from "../outer-navbar";
import FastTicketBuy from "../fastTicketBuy";

import styles from "./styles/index.module.scss";

const NavBar = () => {
  return (
    <div className={styles.placingTheBox}>
      <div className={styles.main}>
        <OuterNavBar />
        <InnerNavbar />
        <FastTicketBuy />
      </div>
    </div>
  );
};

export default NavBar;
