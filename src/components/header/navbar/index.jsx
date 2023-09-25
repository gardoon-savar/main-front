import React from "react";

import icons from "../../../assets/icons/icons";
import Button from "../../general/button";

import styles from "./styles/index.module.scss";

const Navbar = () => {
  return (
    <header className={styles.main}>
      <div className={styles.ticketBox}>
        <Button title="پیگیری خرید" icon={icons.ticket} />
      </div>
      <span>گردون سوار</span>
    </header>
  );
};

export default Navbar;
