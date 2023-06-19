import React from "react";

import styles from "./styles/index.module.scss";

const TextInput = ({ text }) => {
  return (
    <div className={styles.main}>
      <input type="text" placeholder={text}></input>
    </div>
  );
};

export default TextInput;
