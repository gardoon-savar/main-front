import React from "react";

import icons from "../../../assests/icons/icons";
import Button from "../../general/button";

import styles from "./styles/index.module.scss";

const Navbar = () => {
  return (
    <header className={styles.main}>
      <span>گردون سوار</span>
      <Button title="پیگیری بلیط" icon={icons.ticket} />
    </header>
  );
};

export default Navbar;
