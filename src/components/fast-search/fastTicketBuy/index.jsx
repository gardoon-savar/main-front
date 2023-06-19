import React from "react";

import Selection from "../../general/selection";
import Button from "../../general/button";
import SourceDestination from "../source-destination";

import styles from "./styles/index.module.scss";

const FastTicketBuy = () => {
  return (
    <div className={styles.main}>
      <Selection />
      <SourceDestination />
      <div className={styles.buttonBox}>
        <Button title="خرید" />
      </div>
    </div>
  );
};

export default FastTicketBuy;
