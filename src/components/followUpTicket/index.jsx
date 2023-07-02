import React from "react";

import white from "../../assests/images/white.png";

import styles from "./styles/index.module.scss";
import TextInput from "../general/textInput";

const FollowUpTicket = () => {
  return (
    <div className={styles.placingTheBox}>
      <div className={styles.main}>
        <img src={white} className={styles.right} />
        <div className={styles.middle}>
          <h3>بلیط من کو؟!</h3>
          <TextInput placeholder="کد پیگیری خود را وارد نمایید" />
          <p>لطفا کد پیگیری خودتون رو وارد کنین تا وضعیتش رو بررسی کنیم. </p>
          <p>نتیجه در قالب پیامک براتون ارسال میشه</p>
        </div>
        <img src={white} className={styles.left} />
      </div>
    </div>
  );
};

export default FollowUpTicket;
