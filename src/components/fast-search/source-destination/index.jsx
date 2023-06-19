import React from "react";

import TextInput from "../../general/textInput";
import styles from "./styles/index.module.scss";

const SourceDestination = () => {
  return (
    <div className={styles.main}>
      <TextInput placeHolder="مبدا" />
      <img
        className={styles.changeIcon}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtElEQVR4nO3YPQoCMRCG4fcSs+j9r6EIioXRarfwOCuBqWMjZD75Hki3xfwskzBg9lcuQAMWRDVgBzbVJAJYM4k3cERQOIkiwp1Q7MQ9P6x8nqMEbuoJKPxCB4SEg58kXPlJQrny5IiUfk6fgYdq8GZmY0vO6T7qJIPf8pLpc1pKKF/v4eAnCVd+klCufPcqsDbZv5y++pFO4DpKwAvVKsKr7SLCnSj4nG6IWjL40+xAzPidD+kR+t3Q4VeNAAAAAElFTkSuQmCC"
      />
      <TextInput placeHolder="مقصد" />
    </div>
  );
};

export default SourceDestination;
