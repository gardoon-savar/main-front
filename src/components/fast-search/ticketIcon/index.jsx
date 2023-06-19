import React from "react";
import styles from "./styles/index.module.scss";

const TicketIcon = ({ isActive, title, icon }) => {
  return (
    <li className={`${styles.main} ${!isActive ? styles.commingSoon : ""} `}>
      <img src={icon} />
      <span>{title}</span>
      {!isActive ? (
        <div>
          <span className={styles.commingSoonText}>به زودی</span>
        </div>
      ) : (
        ""
      )}
    </li>
  );
};

export default TicketIcon;
