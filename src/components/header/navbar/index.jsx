import React from "react";

import icons from "../../../assets/icons/icons";
import Button from "../../general/button";

import styles from "./styles/index.module.scss";

const Navbar = () => {
  return (
    <header className={styles.main}>
      <Button title="پیگیری بلیط" icon={icons.ticket} />
      <span>گردون سوار</span>
    </header>
  );
};

export default Navbar;
